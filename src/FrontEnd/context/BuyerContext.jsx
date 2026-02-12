import { createContext, useState } from "react"

const BuyerContext = createContext()

export function BuyerProvider({ children }) {
  const [buyer, setBuyer] = useState(null)

  return (
    <BuyerContext.Provider value={{ buyer, setBuyer }}>
      {children}
    </BuyerContext.Provider>
  )
}

export default BuyerContext