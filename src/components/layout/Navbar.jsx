import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: ${props => props.theme.white};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 90px;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`

const StyledLogo = styled.span`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
`

function Navbar () {
  return (
    <StyledNavbar>
      <StyledLogo># Social Dev</StyledLogo>
      <div>
        <a href="#">Desconectar</a>
      </div>
    </StyledNavbar>
  )
}

export default Navbar