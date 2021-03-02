import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Card = styled.TouchableOpacity`
  margin: auto;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #000;
  border-radius: 6px;
  width: 90%;
  margin-bottom: 10px;
`;

export const TextCard = styled.Text`
  padding: 10px;
  font-size: 16px;
  color: #000;
  font-family: 'RobotoSlab-Regular';
`;

export const Text = styled.Text`
  margin: 5px;
  font-size: 16px;
  color: #000;
  font-family: 'RobotoSlab-Regular';
`;

export const ListNews = styled.ScrollView`
  margin-top: 15px;
  width: 100%;
`;

export const ContainerCategories = styled.View`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const View = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
`;
