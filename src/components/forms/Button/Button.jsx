import { ButtonStyle } from "./Styles";


export function Button({children, onClick}) {

  return (
    <ButtonStyle onClick={onClick} >{children}</ButtonStyle>
  )
}