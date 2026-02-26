import { useEffect, useRef, useState } from "react";
import logo from "../Assets/Logo_Com_Nome.png";
import "../Style/terminal.css";
import BuyerContext from "../context/BuyerContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import { loadOrcamento, saveOrcamento, clearOrcamento} from "../Utils/orcamentoStorage";
import OrcamentoContext from "../context/OrcamentoContext";

function Terminal() {
  const [inputOn, setInputOn] = useState(true)
  const [quantidade, setQuantidade] = useState()
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [subTotal, setSubtotal] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const { product } = useContext(ProductContext)
  const navigate = useNavigate()
  const { buyer } = useContext(BuyerContext)
  const { setOrcamento } = useContext(OrcamentoContext)

  const lastEnterTime = useRef(0)

  const addProductToBudget = (product) => {
    console.log('teste');
    setItems(prev => [
      ...prev,
      {
        ...product,
        quantidade: quantidade || 1,
        total: (product.preco_compra + (product.preco_compra * buyer.margem / 100)).toFixed(2) * (quantidade || 1)
      }
    ])

    setSubtotal(prev => prev + (product.preco_venda * (quantidade || 1)))
    setTotal(prev => prev + (product.preco_compra * (quantidade || 1)))

    if (buyer.nome !== "Venda Ao Consumidor") {
      setOrcamento(prev => [
        ...prev,
        {
          ...product,
          quantidade: quantidade || 1,
          total: (product.preco_compra + (product.preco_compra * buyer.margem / 100)).toFixed(2) * (quantidade || 1)
        }
      ])
    } else {
      setOrcamento(prev => [
      ...prev,
      {
        ...product,
        quantidade: quantidade || 1,
        total: (product.preco_venda * (quantidade || 1)).toFixed(2)
      }
    ])}

  }

  const removeProduct = (product) => {
    const removedItem = items.filter(item => item !== items[product])
    setItems(removedItem)
    setOrcamento(removedItem)
  }

  useEffect(() => {
    const saved = loadOrcamento()
  
    if (saved) {
      setItems(saved.items || [])
      setTotal(saved.total || 0)
      } else {setInputOn(true)}
  
    setLoaded(true)
  }, [])

  useEffect(() => {
    const handleUnload = () => {
      sessionStorage.removeItem("orcamento_atual")
      // ou localStorage.clear() se quiser apagar tudo
    }
  
    window.addEventListener("beforeunload", handleUnload)
  
    return () => {
      window.removeEventListener("beforeunload", handleUnload)
    }
  }, [])
  

  useEffect(() => {
    if(buyer) {
      setInputOn(false)
    } else {
      setInputOn(true)
    }

    const handleKeyDown = (event) => {
      if(event.key === "F1") {
        event.preventDefault()
        navigate('/products')
      }
      if (event.key === "F2") {
        event.preventDefault(); // evita comportamento padrão
        navigate('/buyers')
      }
      if (event.key === "F5") {
        event.preventDefault()
        navigate('/orcamento')
      }
      if(event.key === "F7") {
        event.preventDefault()
        clearOrcamento()  
        setQuantidade(0)
        setItems([])
        setTotal(0)
        setInputOn(true)
      }
      if (event.key === "F9") {
        event.preventDefault()
        navigate('/relatorios')
      }
      if(event.key === "Enter") {
        console.log(quantidade);
        const now = Date.now()

        if (now - lastEnterTime.current < 400 && product) {
          addProductToBudget(product)
          if (!loaded || items.length === 0) return 
        } 
        lastEnterTime.current = now
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantidade])

  useEffect(() => {
    if (!loaded) return

  saveOrcamento({
    buyer,
    items,
    total,
    updatedAt: new Date().toISOString()
  })
  }, [buyer, items, total, loaded, subTotal])

  return (
    <div className="terminal">
      <div className="terminal-card">

        <header className="terminal-header">
          <h2>Terminal Livre</h2>
        </header>

        <main className="terminal-body">

          <aside className="terminal-left">
            <h3>Itens: {items.length}</h3>

            <img
              alt="Logo da farmanet"
              src={logo}
            />
          </aside>

          <section className="terminal-inputs">
            <label>Código</label>
            <input 
            value={product && product.codigo}
            disabled={inputOn}
            type="text" />

            <label>Quantidade</label>
            <input 
            onChange={({ target }) => {setQuantidade(Number(target.value))}}
            disabled={inputOn} type="number" />

            <label>Valor Unitário</label>
            <input 
            value={product && product.preco_compra}
            disabled={inputOn} type="text" />

            <label>Margem (%)</label>
            <input value={buyer && `${buyer.margem}%`} disabled={inputOn} type="text" />

            <label>Total Item</label>
            <input disabled={inputOn} type="text" />

            <label>Volumes</label>
            <input disabled={inputOn} type="text" />
          </section>

          <div className="right-panel">
            <div className="products-wrapper">
              <table className="products-table" >
              <thead>
              <tr className="terminal-tr">
                  <th>Descrição</th>
                  <th>Fabricante</th>
                  <th>Quantidade</th>
                  <th>Preço Un</th>
                  <th>Preço Tt</th>
                </tr>
              </thead>
              <tbody>
                {items && items.map((product, index) => (
                  <tr onDoubleClick={() => removeProduct(index)} key={product.id}>
                    <td>{product.descricao}</td>
                    <td>{product.fabricante}</td>
                    <td>{product.quantidade}</td>
                    <td>{buyer && buyer.nome !== 'Venda Ao Consumidor' ? Number(product.preco_compra + (product.preco_compra * buyer.margem / 100)).toFixed(2) : Number(product.preco_venda).toFixed(2)}</td>
                    <td>{buyer && buyer.nome !== 'Venda Ao Consumidor' ? Number((product.preco_compra + (product.preco_compra * buyer.margem / 100)) * product.quantidade).toFixed(2) : Number(product.preco_venda * product.quantidade).toFixed(2)} </td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>

        </main>

        <footer className="terminal-footer">
          {!inputOn && <span onClick={() => navigate('/products')}>F1 - Produtos</span>}
          <span onClick={() => navigate('/buyers')}>F2 - Abre pré venda</span>
          {!inputOn && <span onClick={() => navigate('/orcamento')}>F5 - Fecha Pré Venda</span>}
          {!inputOn && <span onClick={() => {clearOrcamento()  
        setQuantidade(0)
        setItems([])
        setTotal(0)
        setInputOn(true)}}>F7 - Cancela Pré Venda</span>}
          <span onClick={() => navigate('/relatorios')}>F9 - Relatorio</span>
          <span>F12 - Fim</span>
        </footer>

      </div>
    </div>
  );
}

export default Terminal;
