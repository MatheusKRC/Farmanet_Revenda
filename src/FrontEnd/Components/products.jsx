import { useState, useEffect, useContext } from "react"
import { getData } from "../Service/request"
import "../Style/products.css"
import ProductContext from "../context/ProductContext"
import { useNavigate } from "react-router-dom"

function Products() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState("")

  const navigate = useNavigate()

  const { setProduct } = useContext(ProductContext)

  const selectProduct = (product) => {
    setProduct({
      id: product.id,
      codigo: product.codigo,
      descricao: product.descricao,
      fabricante: product.fabricante,
      quantidade: product.quantidade, 
      preco_compra: product.preco_compra,
      preco_venda: product.preco_venda
    })
    navigate("/terminal")
  }

  useEffect(() => {
    const handleKeyDown = async (event) => {
      if(event.key === "Enter") {
        const data = await getData("products")
        const productsFilter = data.filter((product) =>
          product.descricao
            ?.toLowerCase()
            .includes(filter.toLowerCase())
        )
        setProducts(productsFilter)
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };  
  }, [products])

  return (
    <div className="products-page">
      <div className="products-container">

        <div className="products-search">
          <input
            type="text"
            placeholder="Digite a descrição e pressione ENTER"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <div className="table-wrapper">
          <table className="products-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Fabricante</th>
                <th>Saldo</th>
                <th>Preço</th>
                <th>Preço_venda</th>
              </tr>
            </thead>

            <tbody>
              {products && products.map((product, index) => (
                <tr
                  key={index}
                  onClick={() => selectProduct(product)}
                >
                  <td>{product.codigo}</td>
                  <td>{product.descricao}</td>
                  <td>{product.fabricante}</td>
                  <td>{product.quantidade}</td>
                  <td>{product.preco_compra}</td>
                  <td>{product.preco_venda}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Products
