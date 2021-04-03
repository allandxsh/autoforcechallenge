import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from "styled-components/native";

export const Container = styled.ScrollView``;

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  background-color: #18131f;
  height: ${hp('11%')};
  width: ${wp('100%')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ImgLogo = styled.Image`
  margin-left: 20px;
  width: 145px;
  height: 30px;
`;

export const ImgMenuIcon = styled.Image`
  margin-left: 20px;
  width: 30px;
  height: 20px;
`;

export const ContactView1 = styled.View``;

export const ButtonCellphone = styled.Text`
  margin-left: 20px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #ff1430;
`;

export const ImgTelefone = styled.Image`
  position: absolute;
  margin-left: 30px;
  margin-top: 10px;
  width: 20px;
  height: 20px;
`;

export const ContactView2 = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-top: 1px;
`;

export const ButtonWhatsapp = styled.Text`
  margin-left: 10px;
  width: 42px;
  height: 42px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ImgWhats = styled.Image`
  position: absolute;
  margin-left: 20px;
  margin-top: 6px;
  width: 47px;
  height: 47px;
`;

export const ImgFiat = styled.Image`
  margin-left: 15px;
  margin-right: 20px;
  height: 30px;
  width: 50px;
`;
