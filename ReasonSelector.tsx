import { useState } from 'react'
import styled from 'styled-components'

const reasons = [
  { id:1, label:'귀찮아요', color:'#FF7675' },
  { id:2, label:'막막해요', color:'#74B9FF' },
  { id:3, label:'무기력해요', color:'#55EFC4' },
]

const Box = styled.div`display:flex; justify-content:space-around; margin-top:32px;`
const Card = styled.div<{selected:boolean;bg:string}>`
  width:80px; height:80px; border-radius:16px;
  background:${p=>p.bg};
  opacity:${p=>p.selected?1:0.5};
  display:flex; align-items:center; justify-content:center;
  cursor:pointer; flex-direction:column; color:#fff;
`

export default function ReasonSelector({onNext}:{onNext:()=>void}) {
  const [sel, setSel] = useState<number|null>(null)
  return (
    <>
      <h2>어렵게 느껴지는 이유가 무엇인가요?</h2>
      <Box>
        {reasons.map(r=>(
          <Card
            key={r.id}
            bg={r.color}
            selected={r.id===sel}
            onClick={()=>setSel(r.id)}
          >
            😊<br/>{r.label}
          </Card>
        ))}
      </Box>
      <button disabled={!sel} onClick={onNext}>다음</button>
    </>
  )
}
