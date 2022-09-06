import styled from "styled-components"

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  border-radius: 10px;
`

const StyledUserName = styled.p`
  font-weight: bold;
  font-size: 18px;
`

const StyledDate = styled.p`
  font-size: 14px;
  margin-top: 10px;
`

const ContainerText = styled.div`
  margin-top: 25px;
`

function Post () {
  return (
    <PostContainer>
      <StyledUserName>@username</StyledUserName>
      <StyledDate>06/09/2022</StyledDate>
      <ContainerText>
        Texto de teste
      </ContainerText>
    </PostContainer>
  )
}

export default Post