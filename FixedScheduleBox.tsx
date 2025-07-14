import { useState } from 'react'
import styled from 'styled-components'
import checkBefore from '../../assets/Check_before.svg'
import checkAfter  from '../../assets/Check_after.svg'

type Item = { id: number; title: string; time: string; done: boolean }
const initialItems: Item[] = [
  { id:1, title:'Studio.via; 정기 팀 미팅', time:'16:00, 주간 반복', done:false },
  { id:2, title:'헬스장 다녀오기',           time:'20:00, 매일 반복', done:true  },
  { id:3, title:'코드 리뷰하기',             time:'10:00, 매일 반복', done:false },
  { id:4, title:'스프린트 회의',             time:'14:00, 주간 반복', done:false },
  { id:5, title:'리팩토링 완료',             time:'18:00, 비정기',     done:true  },
  { id:6, title:'배포 확인',                 time:'22:00, 필요시',     done:false },
]

const Box = styled.div`
  width: 354px;
  height: 142px;
  margin: 16px auto;
  padding: 16px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow-y: auto;
  position: relative;
`

const ViewAll = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  color: #666;
  font-size: 0.9rem;
  cursor: pointer;
`

// Row 전체에 opacity 대신 텍스트만 선명하게
const ItemRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;

  & span {
    margin-left: 8px;
    flex: 1;
    line-height: 1.2;
    font-size: 0.95rem;
    color: #333;
  }

  & small {
    color: #666;
    font-size: 0.85rem;
  }
`

// 아이콘에만 필터를 걸어 before/after 구분
const CheckboxIcon = styled.img<{ done: boolean }>`
  width: 20px;
  height: 20px;
  opacity: ${({ done }) => (done ? 1 : 0.3)};
  transition: filter 0.2s ease;
`

export default function FixedScheduleBox({ onExpand }: { onExpand: () => void }) {
  const [items, setItems] = useState<Item[]>(initialItems)

  const toggleDone = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    )
  }

  return (
    <Box>
      {items.map(item => (
        <ItemRow key={item.id} onClick={() => toggleDone(item.id)}>
          <CheckboxIcon
            src={item.done ? checkAfter : checkBefore}
            alt={item.done ? 'checked' : 'unchecked'}
            done={item.done}
          />
          <span>
            {item.title}<br/>
            <small>{item.time}</small>
          </span>
        </ItemRow>
      ))}

      <ViewAll onClick={onExpand}>전체보기 ›</ViewAll>
    </Box>
  )
}
