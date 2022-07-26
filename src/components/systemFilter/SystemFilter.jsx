import React from 'react'
import { BoxInfoLeft, BoxSearchProducts,BoxListProducts, ProductsList, } from './Styles'
import { Input } from '../forms/Input/Input'
import { Button } from '../forms/Button/Button'
import { DadosContext } from '../../context/DadosContext'

export function SystemFilter() {
  const [searchValue, setSearchValue] = React.useState('')

  const {changeProduct,apiProducts} = React.useContext(DadosContext)

  function onChange({target}) {
    setSearchValue(target.value)
  }

  const [categories, setCategories] = React.useState(apiProducts)

  function takeCategories() {
    if(searchValue.length > 1) {
       const category = apiProducts.filter(valor => {
          return valor.category.name.toUpperCase().includes(searchValue.toUpperCase())
        })
       setCategories(category)
    } else {
      setCategories(apiProducts)
    }
  }


  return (
    <BoxInfoLeft >
      <BoxSearchProducts>
        <Input 
          type="text"
          value={searchValue}
          setValue={setSearchValue}
          onChange={onChange}
          name='search'
          placeholder="Procure aqui"
        />
        <Button onClick={takeCategories}>Procurar</Button>
      </BoxSearchProducts>
      <BoxListProducts>
        
        {categories.map(product => (
          <ProductsList 
            key={product.id}
            id={product.id}
            onClick={changeProduct}
          >
              {product.category.name}
          </ProductsList>
        ))}
      </BoxListProducts>
    </BoxInfoLeft>
  )
}