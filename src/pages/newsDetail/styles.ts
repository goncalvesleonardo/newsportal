import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  align-self: stretch;
`;

export const Card = styled.View`
  padding: 2%;
  background-color: #FFF;
  height: 80%;
  margin-left: 20px;
  margin-right: 20px;
  align-self: stretch;
  elevation: 9;
  border-width: 1px;
  border-color: #000;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #000;
  font-family: 'RobotoSlab-Medium';
`;

export const Text = styled.Text`
  margin: 5px;
  font-size: 20px;
  color: #000;
  font-family: 'RobotoSlab-Regular';
`;
