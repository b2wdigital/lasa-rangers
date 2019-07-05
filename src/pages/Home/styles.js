import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: red;
  position: relative;
`;

export const ButtonSearch = styled.TouchableOpacity`
  height: 75;
  width: 60;
  /* background-color: orange; */
  position: absolute;
  top: 10;
  right: 50;
  z-index: 1;
`;

export const InputSearch = styled.TextInput`
  height: 60;
  width: 100%;
  background-color: transparent;

  /* top: 70;
  z-index: 1; */
  padding-left: 20px;
`;

export const SearchContainer = styled.View`
width: 100%;
height: 65;
padding: 5px 15px;
background-color: orange;
top: 80;
  z-index: 1;
  position: absolute;
  flex-direction: row;
`;

export const IconsContainer = styled.View`
width: 18%;
height: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;
