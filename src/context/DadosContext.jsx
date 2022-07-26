import React from 'react'
import api from '../api/api'

export const DadosContext = React.createContext()

function DadosProdutos({children}) {

  const apiProducts = api.data.nodes

  const [productChosen, setProductChosen] = React.useState(apiProducts[0])

  

  function changeProduct(event) {
    const filter = api.data.nodes.filter(val => event.target.id === val.id)
    setProductChosen(filter[0])
    const li = document.querySelectorAll('li')
    li.forEach(e => {
      e.classList.remove('ativo')
    })
    event.target.className = `${event.target.className} ativo`
  }



  return (
    <DadosContext.Provider value={{
      productChosen,
      changeProduct,
      apiProducts
    }}>
      {children}
    </DadosContext.Provider>
  )
}

export default DadosProdutos