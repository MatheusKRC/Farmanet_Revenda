const { useState, useEffect } = require("react")
const { getData } = require("../Service/request");


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
    console.log(newSugestao);
}

const handleUpload = async (file) => {
    if (!file) {
      alert("Selecione um arquivo");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file); // 🔥 arquivo real
  
    const response = await fetch("http://localhost:3004/upload", {
      method: "POST",
      body: formData // ❌ sem headers
    });
  
    const {data, error} = await response.json();
  
    console.log(data, Array.isArray(data));
  
    if (!response.ok) {
      console.error(error);
      return;
    }

  }

  useEffect(() => {
    getAll()
  }, [])

    return (
        <div>
            Relatorio de Estoque
          <input 
          type="file"
          onChange={(e) => handleUpload(e.target.files[0])}

          ></input>
          <br></br>
          <br></br>
            Relatorio de Saidas
          <input 
          type="file"
          onChange={(e) => handleUpload(e.target.files[0])}

          ></input>
          <button
          onClick={() => createSugestão()}
          >teste</button>
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
             
                {sugestao && sugestao.map((prod) => (
                <tbody>
                    <td>{prod.descricao_estq}</td>
                    <td>{prod.fabricante_estq}</td>
                    <td>{prod.quantidade_estq}</td>
                    <td>{prod.saida.quantidade_s}</td>
                    <td>{prod.sugestao}</td>
                </tbody>
                ))}
             
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