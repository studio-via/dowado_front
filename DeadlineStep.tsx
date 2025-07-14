import { useState } from 'react'
import styled from 'styled-components'

type DateState = { year: number; month: number; day: number }

const Box = styled.div`flex:1; display:flex; flex-direction:column; margin-top:24px;`
const Seg = styled.div`display:flex; margin-bottom:16px;`
const SegBtn = styled.button<{sel:boolean}>`
  flex:1; padding:8px; border:1px solid #ddd;
  background:${p=>p.sel?'#333':'#fff'};
  color:${p=>p.sel?'#fff':'#333'}; cursor:pointer;
`
const Selects = styled.div`display:flex; gap:8px; margin-bottom:24px;`
const S = styled.select`
  flex:1; padding:8px; border:1px solid #ddd; border-radius:8px;
`

export default function DeadlineStep({ onNext }: { onNext: () => void }) {
  const [mode, setMode] = useState<'date' | 'weeks'>('date')

  // ✅ useState는 [state, setState] 구조로 받아야 합니다
  const [date, setDate] = useState<DateState>({
    year: 2025,
    month: 1,
    day: 1
  })

  const years = [2025, 2026, 2027]
  const months = Array.from({length:12},(_,i)=>i+1)
  const days = Array.from({length:31},(_,i)=>i+1)

  return (
    <Box>
      <h2>데드라인을 설정해주세요.</h2>
      <Seg>
        <SegBtn sel={mode === 'date'} onClick={() => setMode('date')}>
          연/월/일
        </SegBtn>
        <SegBtn sel={mode === 'weeks'} onClick={() => setMode('weeks')}>
          몇 주 후
        </SegBtn>
      </Seg>

      {mode === 'date' && (
        <Selects>
          <S
            value={date.year}
            onChange={e =>
              setDate(prev => ({ ...prev, year: +e.target.value }))
            }
          >
            {years.map(yr => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </S>

          <S
            value={date.month}
            onChange={e =>
              setDate(prev => ({ ...prev, month: +e.target.value }))
            }
          >
            {months.map(mo => (
              <option key={mo} value={mo}>
                {mo}
              </option>
            ))}
          </S>

          <S
            value={date.day}
            onChange={e =>
              setDate(prev => ({ ...prev, day: +e.target.value }))
            }
          >
            {days.map(day => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </S>
        </Selects>
      )}

      {/* TODO: weeks 모드 UI 구현 */}

      <button onClick={onNext}>설정 완료</button>
    </Box>
  )
}
