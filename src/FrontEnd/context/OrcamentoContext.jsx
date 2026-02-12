import { createContext, useState } from "react"

const OrcamentoContext = createContext()

export function OrcamentoProvider({ children }) {
  const [orcamento, setOrcamento] = useState([]);
  return (
    <OrcamentoContext.Provider value={{ orcamento, setOrcamento }}>
      {children}
    </OrcamentoContext.Provider>
  )
}

export default OrcamentoContext