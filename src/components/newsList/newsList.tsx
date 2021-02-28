import React, { useState, useEffect } from "react";
import { CheckBox, Text, View, ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native';

import api, { apiKey } from '../../services/api';

import { Container, Card } from "../newsList/styles";

const newsList = () => {
  const navigation = useNavigation();
  const [isArts, setIsArts] = useState(true);
  const [isTechnology, setIsTechnology] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, [isArts, isTechnology])

  const showDetail = (news) => {
    navigation.navigate('newsDetail', { news: news });
  }

  const getNews = async () => {
    setNews([]);
    try {
      let arts = [];
      let technology = [];
      if (isArts) {
        await api.get('/arts.json', { params: {
          'api-key': apiKey
        }}).then(response => {
          arts = response.data.results;
        });
      }

      if (isTechnology) {
        await api.get('/technology.json', { params: {
          'api-key': apiKey
        }}).then(response => {
          technology = response.data.results;
        });
      }

      setNews(news.concat(arts, technology));
    } catch (error) {}
  }

  return (
    <Container>
      <View>
        <CheckBox
          value={isArts}
          onValueChange={setIsArts}
        />
        <Text>Arts</Text>
      </View>
      <View>
        <CheckBox
          value={isTechnology}
          onValueChange={setIsTechnology}
        />
        <Text>Technology</Text>
      </View>
      <ScrollView>
        {news.map((news) => {
          return (
            <Card onPress={() => showDetail(news)}>
              <Text>{news.title}</Text>
            </Card>
          )
        })
        }
      </ScrollView>
    </Container>
  );
};

export default newsList;
