import { useEffect, useState } from 'react'
import styled from 'styled-components'

const texts: React.ReactNode[] = [
  <>아아아 <strong>배수연</strong>님!<br/>오늘도 미루시나요?</>,
  <>힘내세요 <strong>배수연</strong>님!<br/>오늘 할 일을 시작해볼까요?</>,
  <>좋은 아침이에요 <strong>배수연</strong>님!<br/>오늘도 화이팅!</>
]

const Box = styled.div`
  margin-top: 68px;
  padding: 24px;
  white-space: pre-line;
  font-size: 1.2rem;
`

export default function MainmentText() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(()=> setIdx(i=> (i+1)%texts.length), 8000)
    return ()=>clearInterval(t)
  },[])
  return <Box>{texts[idx]}</Box>
}
