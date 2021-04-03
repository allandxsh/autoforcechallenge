import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from "styled-components/native";

export const Wrapper = styled.View``;

export const Container = styled.View`
  display: flex;
  align-items: center;
  width: ${wp('100%')};
  height: ${hp('20%')};
  background-color: #2b222f;
`;

export const ImgBar = styled.Image`
  width: 90%;
  margin-top: 15px;
`;

export const Button = styled.Text`
  margin-top: 30px;
  border: 0.8px solid #ff1430;
  border-radius: 2px;
  width: 90%;
  color: #fff;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  font-size: ${wp('4.5%')};
`;


export const ContainerWhats = styled.View`

`;

export const ImgWhats = styled.Image`
  position: absolute;
  margin-left: 18px;
  margin-top: 6px;
  width: 88px;
  height: 88px;
  z-index: 9999;
  margin-left: 105px;
  margin-top: 30px;
`;