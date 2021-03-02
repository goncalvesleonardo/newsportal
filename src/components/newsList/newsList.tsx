import React, { useState, useEffect } from "react";
import { CheckBox, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

import api, { apiKey } from '../../services/api';

import { Container, Card, ContainerCategories, View, TextCard, Text, ListNews } from "../newsList/styles";

const newsList = () => {
  const navigation = useNavigation();
  const [isScience, setIsScience] = useState(true);
  const [isTechnology, setIsTechnology] = useState(true);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msgLoading] = useState('Loading...');

  useEffect(() => {
    getNews();
  }, [isScience, isTechnology])

  const showDetail = (news) => {
    navigation.navigate('newsDetail', { news: news });
  }

  const getNews = async () => {
      setLoading(true);
      setNews([]);
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

      if (isScience || isTechnology) {
        let newsSelected = [];
        technology.map((tech) => {
          newsSelected.push(tech);
        })

        science.map((science) => {
          newsSelected.push(science);
        })

        setNews(newsSelected);
        setLoading(false);
      }
      setLoading(false);
  }

  return (
    <Container>
      <Spinner visible={loading} textContent={msgLoading} textStyle={{color: '#000'}} />
      <ContainerCategories>
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
      </ContainerCategories>
      {isScience || isTechnology ? (
        <ListNews>
        {news.map((news, index) => {
          return (
            <Card key={index} onPress={() => showDetail(news)}>
              <TextCard>{news.title}</TextCard>
            </Card>
          )
        })
        }
      </ListNews>
      ) : (
        <Text>Select a category</Text>
      )}
    </Container>
  );
};

export default newsList;
