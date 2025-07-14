import { useEffect, useState } from 'react'
import styled from 'styled-components'

const colors = ['#A29BFE','#74B9FF','#55EFC4']
const Box = styled.div<{bg:string}>`
  position:absolute; top:24px; right:16px;
  width:64px; height:64px; border-radius:32px;
  background:${p=>p.bg}; display:flex; align-items:center; justify-content:center;
  font-size:2rem; color:#fff;
`

export default function DowadoAgentCharacter() {
  const [i, setI] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=>setI(v=> (v+1)%colors.length), 10000)
    return ()=>clearInterval(t)
  },[])
  return <Box bg={colors[i]}>😊</Box>
}
