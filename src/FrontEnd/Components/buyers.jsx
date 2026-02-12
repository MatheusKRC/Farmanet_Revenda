import { useEffect, useState } from "react"
import { getData } from "../Service/request"
import BuyerContext from "../context/BuyerContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import '../Style/buyers.css'

function Buyers() {
    const [buyers, setBuyers] = useState([{}])
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const getBuyers = async () => {
        const buyers = await getData('collectors')
        setBuyers(buyers)
    }

    const { setBuyer } = useContext(BuyerContext)

    const selectBuyer = (buyer) => {
      setBuyer({
        id: buyer.id,
        nome: buyer.collector_name,
        margem: buyer.collector_fess
      })
      navigate("/terminal")
    }

    useEffect(() => {
        getBuyers()
    },[])

    const filteredBuyers = buyers.filter(buyer =>
        buyer.collector_name
          ?.toLowerCase()
          .includes(search.toLowerCase())
      )

    return (
        <div className="buyers-page">
      <div className="buyers-container">
        
        <div className="buyers-search">
          <input
            type="text"
            placeholder="Digite o comprador e pressione ENTER"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="buyers-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Margem</th>
            </tr>
          </thead>
          <tbody>
            {filteredBuyers.map((buyer) => (
              <tr onClick={() => selectBuyer(buyer)} key={buyer.id}>
                <td >{buyer.id}</td>
                <td>{buyer.collector_name}</td>
                <td>{buyer.collector_fess}%</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
    )
}

export default Buyers