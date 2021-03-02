import React from 'react';
import { Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import { Container, ScrollView, Title, Text } from './styles';

const news = ({ route}) => {
  const { news } = route.params;
  return (
    <Container>
      <ScrollView>
        <Title>{news.title}</Title>
        <Text>{news.abstract}</Text>
        <AutoHeightImage
          width={Dimensions.get('window').width - 20}
          source={{uri: news.multimedia[0].url}}
        />
        <Text>{news.url}</Text>
      </ScrollView>
    </Container>
  );
};''

export default news;
