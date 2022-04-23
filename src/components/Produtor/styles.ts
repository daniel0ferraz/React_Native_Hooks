import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  background-color: #f6f6f6;
  margin: 8px 16px;
  border-radius: 6;
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 6;
  /* margin-right: 16px; */
  margin-left: 16px;
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 8px;
  margin-right: 16px;
  /* margin-left: 16px; */
`;

export const Name = styled.Text`
  font-weight: bold;
`;

export const Distance = styled.Text`
  font-size: 12px;
  line-height: 19px;
`;
