import { ContainerInput, InputStyle } from "./Styles";


export function Input({onChange, value, setValue, name, placeholder}) {


  return (
    <ContainerInput>
      <InputStyle 
        type="text" 
        onChange={onChange}
        value={value}
        setValue={setValue}
        name={name}
        placeholder={placeholder}
      />
      <label>{placeholder}</label>
    </ContainerInput>
    
  )
}