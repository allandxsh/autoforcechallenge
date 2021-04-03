import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from "styled-components/native";

export const Wrapper = styled.View``;

export const Container = styled.View`
  width: ${wp('100%')};
  height: ${hp('95%')};
  background-color: #433b47;
`;

export const MainItem = styled.View`
  width: ${wp('100%')};
  height: ${hp('8%')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ff1430;
  padding-right: 16px;
`;

export const MainText = styled.Text`
  margin-left: 16px;
  color: #fff;
  font-size: ${wp('4.5%')};
  font-weight: bold;
  text-align: left;
  font-style: normal;
  font-family: "sans-serif";
`;

export const InfoContainer = styled.View`
  display: flex;
`;

export const InfoText = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  font-size: ${wp('4.3%')};
  font-weight: bold;
  margin-left: 42px;
`;

export const Line = styled.View`
  border: 0.2px solid white;
  width: 80%;
  margin-left: 42px;

`;

export const ActivityContainer = styled.View`
  display: flex;
  justify-content: center;
`;

export const ActivityText = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 16px;
  color: #fff;
  font-weight: bold;
  font-size: ${wp('4.3%')};
`;

export const ActivityLine = styled.View`
  border: 0.2px solid white;
  width: 90%;
  margin-left: 16px;
`;

export const ConsorcioContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NewStyle = styled.View`
  margin-left: 16px;
  width: 50px;
  height: 24px;
  background-color: #ff1430;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const NewText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
