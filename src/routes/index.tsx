import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import news from '../pages/news/news';
import newsDetail from '../pages/newsDetail/newsDetail';

const News = createStackNavigator();

const NewsRoutes = () => (
  <News.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FFF' },
    }}
  >
    <News.Screen name='news' component={news} />
    <News.Screen name='newsDetail' component={newsDetail} />
  </News.Navigator>
)

export default NewsRoutes;
