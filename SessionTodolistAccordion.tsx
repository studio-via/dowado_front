import styled from 'styled-components'

type Todo = { id:number, title:string, done:boolean }
const mock:Todo[] = [
  {id:1,title:'To-do 1',done:false},
  {id:2,title:'To-do 2',done:true},
]

const Box = styled.div`
  margin:16px 24px; padding:12px; background:#fff; border-radius:12px;
`
const Row = styled.label<{done:boolean}>`
  display:flex; align-items:center; margin-bottom:8px;
  opacity: ${p=>p.done?0.5:1};
  & > span { margin-left:8px; }
`

export default function SessionTodolistAccordion() {
  return (
    <Box>
      {mock.map(t=>(
        <Row key={t.id} done={t.done}>
          <input type="checkbox" defaultChecked={t.done}/>
          <span>{t.title}</span>
        </Row>
      ))}
    </Box>
  )
}
