import styled from "styled-components"

const StyledButton = styled.button`
  background-color: ${props => props.theme.primary};
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  color: ${props => props.theme.white};
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s;

  ${props => !props.disabled && 'cursor: pointer;'}

  :hover {
    background-color: ${props => props.theme.primaryHover};
  }

  :disabled {
    background-color: ${props => props.theme.disabled};
  }
`

const Button = ({ children, loading, disabled, ...props }) => {
  return (
    <StyledButton 
      disabled={disabled || loading}
      {...props}
    >
      {loading && <img src="./loading.svg" width="15px" />}
      {!loading && children}
    </StyledButton>
  )
}

export default Button