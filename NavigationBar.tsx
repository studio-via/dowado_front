import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import homeIcon     from '../../assets/material-symbols_home-rounded.svg'
import calendarIcon from '../../assets/material-symbols_calendar-month.svg'
import chartIcon    from '../../assets/material-symbols_analytics-rounded.svg'
import profileIcon  from '../../assets/basil_user-solid.svg'

const Bar = styled.div`
  width: 402px;
  height: 85px;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: #EBEBEB;
  border: 1px solid #D9D9D9;
  border-radius: 30px 30px 0 0;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.10);

  /* 네이티브 스크롤바 가리기 (필요시) */
  &::-webkit-scrollbar { display: none; }
  z-index: 1000;
`

const Item = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  color: ${({ active }) => (active ? '#333' : '#999')};
  cursor: pointer;
`

const Icon = styled.img<{ active: boolean }>`
  width: 28px;
  height: 28px;
  margin-bottom: 4px;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
`

export default function NavigationBar() {
  const nav = useNavigate()
  const loc = useLocation()

  const paths = ['/', '/calendar', '/analysis', '/profile']
  const icons = [homeIcon, calendarIcon, chartIcon, profileIcon]
  const labels = ['메인', '달력', '분석', '프로필']

  return (
    <Bar>
      {paths.map((path, i) => {
        const active = loc.pathname === path
        return (
          <Item key={path} active={active} onClick={() => nav(path)}>
            <Icon src={icons[i]} active={active} />
            {labels[i]}
          </Item>
        )
      })}
    </Bar>
  )
}