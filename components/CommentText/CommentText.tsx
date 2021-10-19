import Button from "components/Button/Button"
import { useState } from "react"
import { StyledForm, TextField } from "./styled"

const CommentText = () => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    const target = e.target.value;
    setText(target);
  }
  
  const handleSubmit = () => {
    console.log("надіслали", text);
    
  }
  return (
    <StyledForm >
      <TextField value={text} onChange={handleChange}/>
      <Button type="submit" onClick={handleSubmit}>Send</Button>
    </StyledForm>
  )
}
export default CommentText