import styled from 'styled-components'

const Backdrop = styled.div`
  position:absolute; inset:0; background:rgba(0,0,0,0.4);
  display:flex; align-items:center; justify-content:center;
`
const Panel = styled.div`
  width:90%; max-width:360px; background:#fff;
  border-radius:16px; padding:24px;
`
const Close = styled.button`
  position:absolute; top:16px; right:16px; border:none; background:none; font-size:1.2rem;
`

export default function OverlayTodayFeedback({onClose}:{onClose:()=>void}) {
  return (
    <Backdrop onClick={onClose}>
      <Panel onClick={e=>e.stopPropagation()}>
        <Close onClick={onClose}>✕</Close>
        <h3>오늘의 일정 리뷰</h3>
        <p>자동 재조정된 일정이 표시됩니다.</p>
      </Panel>
    </Backdrop>
  )
}
