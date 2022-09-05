import styled from "styled-components"
import Link from "next/link"

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"
import Button from "../src/components/inputs/Button"
import Input from "../src/components/inputs/Input"

const FormContainer = styled.div`
  margin-top: 50px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  gap: 20px;
`

const Text = styled.p`
  text-align: center;
`

function SignUpPage () {
  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>Tudo que acontece no mundo dev está aqui!</H4>
      <FormContainer>
        <H2>Crie sua conta</H2>
        <Form>
          <Input label="Nome" type="text" required />
          <Input label="Sobrenome" type="text" required />
          <Input label="Usuário" type="text" required />
          <Input label="E-mail" type="email" required />
          <Input label="Senha" type="password" required />
          <Button>Criar conta</Button>
        </Form>
        <Text>Já possui uma conta? <Link href="/login">Faça login!</Link></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default SignUpPage