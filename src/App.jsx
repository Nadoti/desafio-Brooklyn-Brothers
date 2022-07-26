import React from 'react'
import { SystemFilter } from './components/systemFilter/SystemFilter'
import { ChosenProduct } from './components/chosenProduct/ChosenProduct'
import {Container, BoxMain} from './styles/Home'


export function App() {
  

  return (
    <>
      <Container>
        <BoxMain >
          <SystemFilter />
          <ChosenProduct />
        </BoxMain>
      </Container>
    </>
    
  )
}



/*
<BoxMain>
        <BoxInfoLeft>
          <BoxSearchProducts>
            <input type="text" />
            <button>Teste</button>
          </BoxSearchProducts>
          <BoxListProducts>
            <Products>Manga</Products>
            <Products>Pera</Products>
            <Products>maça</Products>
            <Products>banana</Products>
            <Products>banana</Products>
            <Products>banana</Products>
            <Products>banana</Products>
          </BoxListProducts>
        </BoxInfoLeft>

        <div>
          <h1>TITULO</h1>
          <img src={api.data.nodes[0].images[0].asset.url} alt="" />
        </div>

      </BoxMain>
*/