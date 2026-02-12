const KEY = "orcamento_atual"

export const saveOrcamento = (data) => {
  sessionStorage.setItem(KEY, JSON.stringify(data))
}

export const loadOrcamento = () => {
  const stored = sessionStorage.getItem(KEY)
  return stored ? JSON.parse(stored) : null
}

export const clearOrcamento = () => {
  sessionStorage.removeItem(KEY)
}
