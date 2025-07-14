import { useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`flex:1; display:flex; flex-direction:column; margin-top:24px;`
const TextArea = styled.textarea`
  flex:1; padding:12px; border:1px solid #ddd; border-radius:12px;
  resize:none; font-size:1rem;
`

export default function SpecialSituationStep({onFinish}:{onFinish:()=>void}) {
  const [text, setText] = useState('')
  return (
    <Box>
      <h2>더 얘기하고 싶은 것은 없으신가요?</h2>
      <TextArea
        placeholder="자유롭게 입력해주세요."
        value={text}
        onChange={e=>setText(e.target.value)}
      />
      <button onClick={onFinish}>완료</button>
    </Box>
  )
}
