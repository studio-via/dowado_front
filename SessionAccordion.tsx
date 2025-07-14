import React, { useState } from 'react'
import styled from 'styled-components'
import checkBefore from '../../assets/Check_before.svg'
import checkAfter  from '../../assets/Check_after.svg'

type Todo = { id: number; text: string; done: boolean }
type Session = {
  id: number
  caption: string
  title: string
  todos: Todo[]
}

// caption 과 title 사이 세로 구분선용 컨테이너
const TextContainer = styled.div`
  display: flex;
  align-items: center;
`

// 세로 구분선
const VerticalDivider = styled.div`
  width: 1px;
  height: 24px;
  background: #ccc;
  margin: 0 12px;
`

const sessions: Session[] = [
  {
    id: 1,
    caption: '목표 달성을 위한 세션 1',
    title: 'sub project 1',
    todos: [
      { id: 1, text: 'To-do 1', done: false },
      { id: 2, text: 'To-do 2', done: true }
    ]
  },
  {
    id: 2,
    caption: '목표 달성을 위한 세션 2',
    title: 'sub project 2',
    todos: [
      { id: 3, text: 'To-do A', done: false },
      { id: 4, text: 'To-do B', done: false }
    ]
  }
]

const Container = styled.div`
  width: 354px;
  margin: 16px auto;
`

const Card = styled.div`
  background: #EBEBEB;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 1px;
`

const Header = styled.div<{ open: boolean }>`
  height: 65px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  border-bottom: ${({ open }) => (open ? 'none' : '1px solid #eee')};
`

// 텍스트 그룹 (Caption + Title)
const TextGroup = styled.div`
   display: flex;
   flex-direction: column;
`

const Caption = styled.span`
  font-size: 0.85rem;
  color: #999;
`

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-top: 4px;
`

const Icon = styled.span<{ open: boolean }>`
   font-size: 1.2rem;
   color: #666;
   transform: rotate(${p => (p.open ? '180deg' : '0deg')});
   transition: transform 0.2s ease;
`

const Panel = styled.div<{ open: boolean }>`
  max-height: ${({ open }) => (open ? '500px' : '0')};
  padding: ${({ open }) => (open ? '15px 24px 45px' : '0 24px')};
  transition: max-height 0.3s ease, padding 0.3s ease;
  overflow: hidden;
`

const TodoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  & span {
    margin-left: 8px;
    font-size: 0.95rem;
    color: #333;
  }
`

const CheckboxIcon = styled.img<{ done: boolean }>`
  width: 24px;
  height: 24px;
  opacity: ${({ done }) => (done ? 1 : 0.3)};
  transition: opacity 0.2s ease;
`

const Divider = styled.div`
  height: 1px;
  background: #eee;
  margin: 0 24px;
`

export default function SessionAccordion() {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set())
  const [data, setData] = useState<Session[]>(sessions)

  /** 세션 카드 열기/닫기 */
  const toggleSession = (id: number) => {
    setOpenIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  /** To-do 체크 상태 토글 */
  const toggleTodo = (sessionId: number, todoId: number) => {
    setData(prev =>
      prev.map(s =>
        s.id === sessionId
          ? {
              ...s,
              todos: s.todos.map(t =>
                t.id === todoId ? { ...t, done: !t.done } : t
              )
            }
          : s
      )
    )
  }

  return (
    <Container>
      {data.map((session, idx) => {
        const isOpen = openIds.has(session.id)
        return (
          <React.Fragment key={session.id}>
            <Card>
              {/* <Header open={isOpen} onClick={() => toggleSession(session.id)}>
                <Caption>{session.caption}</Caption>
                <Title>{session.title}</Title>
                <Icon open={isOpen}>{isOpen ? '▲' : '▼'}</Icon>
              </Header> */}
              <Header open={isOpen} onClick={() => toggleSession(session.id)}>
               <TextContainer>
                 <Caption>{session.caption}</Caption>
                 <VerticalDivider />
                 <Title>{session.title}</Title>
               </TextContainer>
               <Icon open={isOpen}>{isOpen ? '▲' : '▼'}</Icon>
             </Header>
              <Panel open={isOpen}>
                {session.todos.map(todo => (
                  <TodoRow
                    key={todo.id}
                    onClick={() => toggleTodo(session.id, todo.id)}
                  >
                    <CheckboxIcon
                      src={todo.done ? checkAfter : checkBefore}
                      alt={todo.done ? 'checked' : 'unchecked'}
                      done={todo.done}
                    />
                    <span>{todo.text}</span>
                  </TodoRow>
                ))}
              </Panel>
            </Card>

            {/* 닫힌 상태의 카드들만 구분선 */}
            {!isOpen && idx < data.length - 1 && <Divider />}
          </React.Fragment>
        )
      })}
    </Container>
  )
}
