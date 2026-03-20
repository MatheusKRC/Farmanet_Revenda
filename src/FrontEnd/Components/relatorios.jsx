import "../Style/relatorio.css"
const { useState, useEffect } = require("react")
const { getData, deleteData, postData } = require("../Service/request");



function Relatorios() {
const [estoque, setEstoque] = useState()
const [saidas, setSaidas] = useState()
const [sugestao, setSugestao] = useState()

const getAll = async () => {
    const dataEstoque = await getData("/estoque")
    const dataSaidas = await getData("/saidas")
    setEstoque(dataEstoque)
    setSaidas(dataSaidas)
}

const createSugestão = async () => {
    const newObj = new Map(saidas.map(s => [s.descricao_s, s]))

    const resultado = estoque.filter(prod => newObj.has(prod.descricao_estq)).map(prod => ({
        ...prod,
        saida: newObj.get(prod.descricao_estq),
        sugestao: newObj.get(prod.descricao_estq).quantidade_s - prod.quantidade_estq + Math.ceil((newObj.get(prod.descricao_estq).quantidade_s / 5))
    }))

    const newSugestao = resultado.filter(({sugestao}) => sugestao > 0)
    setSugestao(newSugestao)
}

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

async function postInChunks(route, items, chunkSize = 500) {
  const chunks = chunkArray(items, chunkSize);

  for (let i = 0; i < chunks.length; i++) {
    await postData(route, chunks[i]); // envia só um pedaço por vez
    console.log(`POST ${route}: lote ${i + 1}/${chunks.length} (${chunks[i].length} itens)`);
  }
}

const handleUpload = async (file, route) => {
    if (!file) {
      alert("Selecione um arquivo");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file); // 🔥 arquivo real
  
    const response = await fetch(`https://farmanetrevenda-production-63b5.up.railway.app/upload${route}`, {
      method: "POST",
      body: formData// ❌ sem headers
    });
  
    const {data, error} = await response.json();
  
    console.log(data, Array.isArray(data));
    await deleteData(route)
    if (route === 'estoque') {
        const dataEstq = data.map(prod => ({
                descricao_estq: prod.descricao,
                fabricante_estq: prod.fabricante,
                quantidade_estq: prod.quantidade
        }))
        console.log(dataEstq);
        const estoqueData = await postInChunks('estoques', dataEstq, 800)
        setEstoque(estoqueData)
        console.log(estoque);
        alert('Estoque Atualizado')
    } else {
        const dataS = data.map(prod => ({
            descricao_s: prod.descricao,
            fabricante_s: prod.fabricante,
            quantidade_s: prod.quantidade
    }))
        console.log(dataS);
        const saidasData = await postInChunks(route, dataS, 1000)
        setSaidas(saidasData)
        console.log(saidas);
        alert('Saidas Atualizadas')
    }
  
    if (!response.ok) {
      console.error(error);
      return;
    }

  }

  useEffect(() => {
    getAll()
  }, [estoque, saidas])

    return (
        <div className="background">
        <div className="relatorios-container">

        <div className="upload-card">
      
          <h2>Importar Relatórios</h2>
      
          <div className="upload-grid">
      
            <div className="upload-group">
              <label>Relatório de Estoque</label>
              <input
                type="file"
                onChange={(e) => handleUpload(e.target.files[0], "estoque")}
              />
            </div>
      
            <div className="upload-group">
              <label>Relatório de Saídas</label>
              <input
                type="file"
                onChange={(e) => handleUpload(e.target.files[0], "saidas")}
              />
            </div>
      
          </div>
      
          <button
            className="btn-gerar"
            onClick={() => createSugestão()}
          >
            Gerar Sugestão
          </button>
      
        </div>
      
      </div>
          <div className="orcamento">
            <div className="orcamento-card">

                <header className="orcamento-header">
                    <h2>Orçamento</h2>
                    <span>Data: {new Date().toLocaleString('pt-BR')}</span>
                </header>
            <main className="orcamento-body">   
              <table className="orcamento-table" >
              <thead>
              <tr>
                  <th>Descrição</th>
                  <th>Fabricante</th>
                  <th>Estoque</th>
                  <th>Saidas</th>
                  <th>Sugestao de Compra</th>
                </tr>
              </thead>
             <tbody>
                {sugestao && sugestao.map((prod) => (
                <tr key={prod.id}>
                    <td>{prod.descricao_estq}</td>
                    <td>{prod.fabricante_estq}</td>
                    <td>{prod.quantidade_estq}</td>
                    <td>{prod.saida.quantidade_s}</td>
                    <td>{prod.sugestao}</td>
                </tr>
                ))}
             </tbody>
              </table>
            </main>
            <footer className="orcamento-footer">
                
            </footer>
            </div>
          </div>
        </div>
    )
}

export default Relatorios;