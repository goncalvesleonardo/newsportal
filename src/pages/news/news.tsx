import React, { useEffect } from 'react';

import NewsList from '../../components/newsList/newsList';
import '../../config/ReactotronConfig';

import { Container, Title } from './styles';
declare global {
  interface Console {
      tron: any
  }
}

const news = () => {
  return (
    <Container>
      <Title>The New York Times</Title>
      <NewsList />
    </Container>
  );
};

export default news;
