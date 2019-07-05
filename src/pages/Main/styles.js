import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const FirstLine = styled.View`
  height: 50;
  width: 100%;
  /* background-color: blue; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-width: 1px;
  border-color: #cecece;
`;

export const SecondLine = styled.View`
  height: 50;
  width: 100%;
  /* background-color: #cecece; */
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #cecece;
`;

export const LineItem = styled.TouchableOpacity`
  height: 150;
  width: 100%;
  /* background-color: yellow; */
  margin-bottom: 5;
  padding: 5px;
  flex-direction: row;
  border-width: 1px;
  border-color: #cecece;
`;

export const LeftArea = styled.View`
  height: 100%;
  width: 35%;
  /* background-color: green; */
`;

export const RightArea = styled.View`
  height: 100%;
  width: 65%;
  /* background-color: pink; */
  padding: 10px 15px;
`;

export const Title = styled.Text`
font-size: 14px;
color: #000;
`;

export const Price = styled.Text`
font-size: 18px;
color: #000;
font-weight: bold;
`;

export const SubtitlePrime = styled.Text`
font-size: 13;
color: #000;
`;
