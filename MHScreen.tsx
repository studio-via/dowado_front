import { useState } from 'react'
import styled from 'styled-components'
import MainmentText from './MainmentText'
import FixedScheduleBox from './FixedScheduleBox'
import DowadoAgentCharacter from './DowadoAgentCharacter'
import GenerateProjectBox from './GenerateProjectBox'
import ProjectBoxCarousel from './ProjectBoxCarousel'
import SessionAccordion from './SessionAccordion'
import OverlayTodayFeedback from './OverlayTodayFeedback'
import NavigationBar from '../GM/NavigationBar'
import SessionTodolistAccordion from './SessionTodolistAccordion'

const Separator = styled.div`
  height: 1px;
  background: #e0e0e0;
  margin: 16px 24px;
`

const Container = styled.div`
  width: 402px; height: 874px;
  overflow-y: auto;
  position: relative;
  background: #EBEBEB;
`

export default function MHScreen() {
  const [showOverlay, setShowOverlay] = useState(false)
  return (
    <Container>
      <MainmentText/>
      <FixedScheduleBox onExpand={() => setShowOverlay(true)} />
      <DowadoAgentCharacter/>
      <Separator/>            
      <GenerateProjectBox/>
      <ProjectBoxCarousel/>
      {/* Today Feedback Overlay */}
      {showOverlay && <OverlayTodayFeedback onClose={()=>setShowOverlay(false)}/>}
      {/* Session Area */}
      <SessionAccordion/>
      <SessionTodolistAccordion/>
      <NavigationBar/>
    </Container>
  )
}
