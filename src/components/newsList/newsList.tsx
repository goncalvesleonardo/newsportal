import React, { useState, useEffect } from "react";
import { CheckBox, Text, View, ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native';

import api, { apiKey } from '../../services/api';

import { Container, Card } from "../newsList/styles";

const newsList = () => {
  const navigation = useNavigation();
  const [isScience, setIsScience] = useState(true);
  const [isTechnology, setIsTechnology] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, [isScience, isTechnology])

  const showDetail = (news) => {
    navigation.navigate('newsDetail', { news: news });
  }

  const getNews = async () => {
    setNews([]);
    try {
      let science = [];
      let technology = [];
      if (isScience) {
        await api.get('/science.json', { params: {
          'api-key': apiKey
        }}).then(response => {
          science = response.data.results;
        });
      }

      if (isTechnology) {
        await api.get('/technology.json', { params: {
          'api-key': apiKey
        }}).then(response => {
          technology = response.data.results;
        });
      }

      setNews(news.concat(science, technology));
    } catch (error) {}
  }

  return (
    <Container>
      <View>
        <CheckBox
          value={isScience}
          onValueChange={setIsScience}
        />
        <Text>Science</Text>
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
