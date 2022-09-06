import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 670px) {
    width: 90%;
    margin: 0 auto;
  }
`

const StyledChildren = styled.div`
  max-width: 600px;
  width: 100%;
`

function Container ({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>
        {children}
      </StyledChildren>
    </StyledContainer>
  )
}

export default Container