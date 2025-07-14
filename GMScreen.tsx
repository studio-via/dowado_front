import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Stepper from './Stepper'
import ReasonSelector from './ReasonSelector'
import GoalInputStep from './GoalInputStep'
import DeadlineStep from './DeadlineStep'
import SpecialSituationStep from './SpecialSituationStep'

const Container = styled.div`
  width: 402px; height: 874px;
  padding:24px;
  display:flex; flex-direction:column;
  background:#f9f9f9;
`

export default function GMScreen(){
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  return (
    <Container>
      <button onClick={()=>navigate(-1)}>← 뒤로</button>
      <Stepper current={step}/>
      {step===1 && <ReasonSelector onNext={()=>setStep(2)}/>}
      {step===2 && <GoalInputStep onNext={()=>setStep(3)}/>}
      {step===3 && <DeadlineStep onNext={()=>setStep(4)}/>}
      {step===4 && <SpecialSituationStep onFinish={()=>navigate('/')}/>}
    </Container>
  )
}
