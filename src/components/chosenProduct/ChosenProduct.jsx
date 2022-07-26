import { BoxInfoRight, Category, Description, Title } from "./Styles";
import React from "react";
import { DadosContext } from "../../context/DadosContext";

export function ChosenProduct() {

  const {productChosen} = React.useContext(DadosContext)

  return (
    <BoxInfoRight>
      <div>
        <Title>{productChosen.name}</Title>
        <img src={productChosen.images[0].asset.url} alt="" />
        <Category>{productChosen.category.name}</Category>
        <Description>{productChosen.shortDescription}</Description>
      </div>
      
    </BoxInfoRight>
  )
}

