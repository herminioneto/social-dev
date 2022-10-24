import { useForm } from "react-hook-form"
import { joiResolver } from "@hookform/resolvers/joi"
import axios from "axios"

import ControlledTextarea from "../inputs/ControlledTextarea"
import Button from "../inputs/Button"
import { createPostSchema } from "../../../modules/post/post.schema"

const EditPost = ({ id, text, onSave }) => {
  const { control, handleSubmit, formState: { isValid } } = useForm({
    resolver: joiResolver(createPostSchema),
    mode: 'all'
  })

  const handleSaveEdit = async (data) => {
    try {
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        id,
        text: data.text
      })

      if (response.status === 200) {
        onSave()
      }

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSaveEdit)}>
      <ControlledTextarea 
        placeholder="Digite sua mensagem" 
        rows="5"
        control={control}
        name="text"
        maxLength="256"
        defaultValue={text}
      />
      <Button disabled={!isValid}>Salvar Alterações</Button>
    </form>
  )
}

export default EditPost