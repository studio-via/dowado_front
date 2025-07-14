import { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

type Project = { id: number; title: string; deadline: string; progress: number }
const mock: Project[] = [
  { id: 1, title: '칸트 철학 공부',          deadline: '2025-12-31', progress: 16 },
  { id: 2, title: 'React 마스터하기',       deadline: '2025-08-15', progress: 40 },
  { id: 3, title: 'TypeScript 심화 학습',   deadline: '2025-09-30', progress: 25 },
  { id: 4, title: '풀스택 포트폴리오 완성', deadline: '2025-11-20', progress: 60 },
  { id: 5, title: '알고리즘 100문제 풀기',   deadline: '2025-12-10', progress: 80 },
]

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 30px 0;
  margin-left: 12px;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 24px;
  &::-webkit-scrollbar { display: none; }
`

// scaleFactor prop 만 받아서 transform: scale(...) 만 변경
const Card = styled.div<{ scaleFactor: number }>`
  flex: 0 0 354px;
  height: 180px;
  margin: 0 12px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  scroll-snap-align: center;
  transform: scale(${p => p.scaleFactor});
  transition: transform 0.3s ease;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Label = styled.span`
  font-size: 0.85rem;
  color: #666;
`

const Value = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
`

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 4px;
`

const ProgressBar = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background: #74b9ff;
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin: 12px 0 20px;
`

const Dot = styled.span<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ active }) => (active ? '#333' : '#ccc')};
  transition: background 0.2s;
`

export default function ProjectBoxCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const onScroll = () => {
    if (!ref.current) return
    const cardFull = 354 + 24
    const ix = Math.round(ref.current.scrollLeft / cardFull)
    setActive(ix)
  }

  useEffect(() => {
    if (!ref.current) return
    const cardFull = 354 + 24
    ref.current.scrollTo({ left: active * cardFull, behavior: 'smooth' })
  }, [active])

  // active 인덱스, 그 주변 인덱스에 따라 scaleFactor 설정
  const getScale = (idx: number) => {
    if (idx === active) return 1.05    // 중앙 카드는 105%
    if (idx === active - 1 || idx === active + 1) return 0.95  // 양옆은 95%
    return 0.9                         // 그 외는 90%
  }

  return (
    <>
      <Wrapper ref={ref} onScroll={onScroll}>
        {mock.map((p, i) => (
          <Card key={p.id} scaleFactor={getScale(i)}>
            <Title>{p.title}</Title>
            <div>
              <InfoRow>
                <Label>Deadline</Label>
                <Value>{p.deadline}</Value>
              </InfoRow>
              <InfoRow style={{ marginTop: 8, flexDirection: 'column', alignItems: 'flex-start' }}>
                <Label>Progress</Label>
                <ProgressBarContainer>
                  <ProgressBar progress={p.progress} />
                </ProgressBarContainer>
                <Value style={{ marginTop: 4 }}>{p.progress}%</Value>
              </InfoRow>
            </div>
          </Card>
        ))}
      </Wrapper>

      <Pagination>
        {mock.map((_, i) => (
          <Dot key={i} active={i === active} />
        ))}
      </Pagination>
    </>
  )
}
