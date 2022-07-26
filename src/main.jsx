import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { GlobalStyles } from './styles/GlobalStyles'
import DadosProdutos  from './context/DadosContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <DadosProdutos>
      <App />
    </DadosProdutos>
    <GlobalStyles />
  </>
)
