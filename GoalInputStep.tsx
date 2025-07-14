import { useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`flex:1; display:flex; flex-direction:column; margin-top:24px;`
const TextArea = styled.textarea`
  flex:1; padding:12px; border:1px solid #ddd; border-radius:12px;
  resize:none; font-size:1rem;
`

export default function GoalInputStep({onNext}:{onNext:()=>void}) {
  const [text, setText] = useState('')
  return (
    <Box>
      <h2>이루기 막막한 목표를 얘기해주세요.</h2>
      <TextArea
        placeholder="[달성하려는 목표가 무엇인가요?]\n자유롭게 입력해주세요."
        value={text}
        onChange={e=>setText(e.target.value)}
      />
      <button disabled={!text.trim()} onClick={onNext}>입력 완료</button>
    </Box>
  )
}
