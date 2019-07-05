import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: red;
  position: relative;
`;

export const ButtonSearch = styled.TouchableOpacity`
  height: 52;
  width: 60;
  background-color: orange;
  position: absolute;
  top: 10;
  right: 50;
  z-index: 1;
`;

export const InputSearch = styled.TextInput`
  height: 60;
  width: 100%;
  background-color: transparent;
  position: absolute;
  top: 70;
  z-index: 1;
  padding-left: 20px;
`;
