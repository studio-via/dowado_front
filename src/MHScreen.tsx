import React from 'react';
import styled from 'styled-components';
import FixedScheduleBox from './FixedScheduleBox';
import GenerateProjectBox from './GenerateProjectBox';
import Carousel from './Carousel';
import SessionList from './SessionList';

const Container = styled.div`
  width: 402px;
  height: 874px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 16px;
  white-space: pre-line;
`;

const MHScreen: React.FC = () => {
  return (
    <Container>
      <Title>아아아 배수연님!\n오늘도 미루시나요?</Title>
      <FixedScheduleBox />
      <GenerateProjectBox />
      <Carousel />
      <SessionList />
    </Container>
  );
};

export default MHScreen;
