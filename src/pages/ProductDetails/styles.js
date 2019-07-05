import styled from 'styled-components/native';
import { Dimensons } from 'react-native'

export const Container = styled.View`
  flex:1;
`;

export const ContainerPhotos = styled.View`
height: 250;
width: 100%;
background-color: pink;
padding: 0 10px;
`;

export const ContainerPhoto = styled.View`
  height: 100%;
  width: Dimensions.get('window').width;
`;
