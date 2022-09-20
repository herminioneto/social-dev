import { forwardRef } from "react"

import styled from "styled-components"

const InputContainer = styled.div`
  width: 100%;
`

const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.inputBorder};
  background-color: ${props => props.theme.inputBackground};
  padding: 15px 20px;
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  ${props => props.error && `border: 2px solid ${props.theme.error}`}
`

const ErrorLabel = styled.span`
  color: ${props => props.theme.error};
  font-weight: bold;
  font-size: 14px;
`

const errorMessage = {
  'string.empty': 'Este campo é obrigatório.',
  'string.email': 'Digite um e-mail válido'
}

const Input = forwardRef(({ label, error, ...props }, ref) => {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder={label} error={error} {...props} ref={ref} />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </InputContainer>
  )
})

export default Input