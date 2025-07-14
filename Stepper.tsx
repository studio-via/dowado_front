import styled from 'styled-components'

const Bar = styled.div`
  display:flex; justify-content:center; margin:16px 0;
  & > div { width:24px; height:24px; border-radius:12px; margin:0 8px;
    display:flex; align-items:center; justify-content:center;
    background:#ddd; color:#fff;
  }
  & > div.active { background:#333; }
`

export default function Stepper({ current }: {current:number}) {
  return (
    <Bar>
      {[1,2,3,4].map(n=>(
        <div key={n} className={n===current?'active':''}>{n}</div>
      ))}
    </Bar>
  )
}
