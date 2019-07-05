import styled from 'styled-components/native';
import {colors, metrics} from '../../styles';

export const Container = styled.View`
  flex:1;
`;

export const ContainerPhotos = styled.View`
height: 200;
width: 100%;
/* background-color: pink; */

`;

export const ContainerPhoto = styled.View`
  height: 100%;
  width: ${metrics.screenWidth};
  align-items: center;
  justify-content: center;
`;

export const FirstLine = styled.View`
height: 60;
width: 100%;
/* background-color: yellow; */
padding: 10px;
align-content: center;
border-width: 1px;
border-color: #cecece;
`;
export const SecondLine = styled.View`
height: 60;
width: 100%;
/* background-color: red; */
padding: 10px;
align-content: center;
border-width: 1px;
border-color: #cecece;
`;
export const ThirdLine = styled.View`
height: 60;
width: 100%;
/* background-color: orange; */
padding: 10px;
align-content: center;
border-width: 1px;
border-color: #cecece;

`;

export const TitleLine = styled.Text`
font-weight: bold;
font-size: 22;
`;

export const Price = styled.Text`
font-size: 25;
font-weight: bold;
text-align: center;
margin: 10px 0;
`;

export const Buy = styled.TouchableOpacity`
height: 60;
width: 70%;
align-self: center;
background-color: red;
align-items: center;
justify-content: center;
margin: 5px;
border-radius: 10px;
`;

export const TextButton = styled.Text`
color: #FFF;
`;
