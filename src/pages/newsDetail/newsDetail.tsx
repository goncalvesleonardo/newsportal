import React from 'react';

import { Container, KeyboardAvoidingView, Card, Title, Text } from './styles';

const news = ({ route}) => {
  const { news } = route.params;
  console.tron.log('news.title, news.abstract, news.url', news);
  return (
    <Container>
      <KeyboardAvoidingView
        enabled
      >
        <Card>
          <Title>{news.title}</Title>
          <Text>{news.abstract}</Text>
          <Text>{news.url}</Text>
        </Card>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default news;
