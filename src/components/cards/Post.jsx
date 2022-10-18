import styled from "styled-components"
import moment from "moment"
import axios from "axios"
import { useSWRConfig } from "swr"

import Menu from "../navigation/Menu"

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

const ContainerMenu = styled.div`
  float: right;
`

function Post ({ text, user, date, isOwner, id }) {
  const { mutate } = useSWRConfig()

  const handleEdit = async () => {
    console.log('editar')
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        data: {
          id
        }
      })
      
      if (response.status === 200)
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
      
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <PostContainer>
      {
        isOwner &&
          <ContainerMenu>
            <Menu 
              options={[
                {
                  text: 'Editar Post',
                  onClick: handleEdit
                },
                {
                  text: 'Deletar Post',
                  onClick: handleDelete
                }
              ]}
            />
          </ContainerMenu>
      }
      <StyledUserName>@{user}</StyledUserName>
      <StyledDate>{moment(date).format('LLL')}</StyledDate>
      <ContainerText>
        {text}
      </ContainerText>
    </PostContainer>
  )
}

export default Post