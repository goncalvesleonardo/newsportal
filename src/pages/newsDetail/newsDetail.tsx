import React from 'react';

import { Container } from './styles';

const news = ({ route}) => {
  const { news } = route.params;
  console.tron.log('news.title, news.abstract, news.url', news);
  return (
    <Container />
  );
};

export default news;
