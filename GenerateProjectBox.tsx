import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import plusIcon from '../../assets/Plus.svg'

const Box = styled.button`
  width: 354px;
  height: 70px;
  margin: 0 auto;               /* 부모 가로 중앙 정렬 */
  display: flex;
  align-items: center;
  padding: 0 16px;
  border: none;
  border-radius: 30px;
  background: #fff;
  /* 사방으로 부드러운 그림자 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  & > strong {
    font-size: 1rem;
    color: #333;
  }

  & > small {
    font-size: 0.85rem;
    color: #888;
    margin-top: 4px;
  }
`

export default function GenerateProjectBox() {
  const nav = useNavigate()
  return (
    <Box onClick={() => nav('/gm')}>
      <Icon src={plusIcon} alt="plus" />
      <TextWrapper>
        <strong>이루고 싶은 목표 새롭게 추가</strong>
        <small>Dowado가 계획부터 수행까지 모두 도와드릴게요.</small>
      </TextWrapper>
    </Box>
  )
}
