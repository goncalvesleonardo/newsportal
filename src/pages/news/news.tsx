import React from 'react';

import Select from '../../components/select/select';

import { Container, Title } from './styles';

const news: React.FC = () => {
  return (
    <Container>
      <Title>The New York Times</Title>
      <Select />
    </Container>
  );
};

export default news;
