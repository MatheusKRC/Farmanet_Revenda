import BuyerContext from "../context/BuyerContext"
import { useContext, useEffect, useState } from "react"
import OrcamentoContext from "../context/OrcamentoContext"
import "../Style/orcamento.css"

function Orcamento() {
    const [total, setTotal] = useState(0)
    const { buyer } = useContext(BuyerContext)
    const { orcamento } = useContext(OrcamentoContext)

    useEffect(() => {
        let soma = 0
        if(orcamento) {
            orcamento.map((preco) => {return soma += Number(preco.total)})
            setTotal(soma.toFixed(2))
        }
    }, [orcamento])

    return (
        <div className="orcamento">
            <div className="orcamento-card">

                <header className="orcamento-header">
                    <h2>Orçamento {buyer && buyer.nome}</h2>
                    <span>Data: {new Date().toLocaleString('pt-BR')}</span>
                </header>
            <main className="orcamento-body">   
              <table className="orcamento-table" >
              <thead>
              <tr>
                  <th>Descrição</th>
                  <th>Fabricante</th>
                  <th>Quantidade</th>
                  <th>Preço Un</th>
                  <th>Preço Tt</th>
                  <th>Desconto</th>
                </tr>
              </thead>
              <tbody>
                {orcamento && orcamento.map((product) => (
                  <tr key={product.id}>
                    <td>{product.descricao}</td>
                    <td>{product.fabricante}</td>
                    <td>{product.quantidade}</td>
                    <td>{buyer.nome !== 'Venda Ao Consumidor' ? Number(product.preco_compra + (product.preco_compra * buyer.margem / 100)).toFixed(2) : Number(product.preco_venda).toFixed(2)}</td>
                    <td>{buyer.nome !== 'Venda Ao Consumidor' ? Number((product.preco_compra + (product.preco_compra * buyer.margem / 100)) * product.quantidade).toFixed(2) : Number(product.preco_venda * product.quantidade).toFixed(2)} </td>
                    <td>{buyer.nome !== 'Venda Ao Consumidor' ? Number(((product.preco_venda - (product.preco_compra + (product.preco_compra * buyer.margem / 100))) / product.preco_venda) * 100).toFixed(2) : '0'}%</td>
                  </tr>
                ))}
              </tbody>
              </table>
            </main>
            <footer className="orcamento-footer">
                {total && <div>Total: R${total}</div>}
            </footer>
            </div>
          </div>
    )
}

export default Orcamento