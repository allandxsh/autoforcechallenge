import styled from 'styled-components/native';


export const Wrapper = styled.View`

`;

export const Container = styled.View`
    width: 100%;
    height: 534px;
    background-color: #433B47;
`;

export const MainItem = styled.View`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #FF1430;
    padding-right: 16px;
`;

export const MainText = styled.Text`
    margin-left: 16px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    font-style: normal;
    font-family: 'sans-serif';
`;

export const InfoContainer = styled.View`
    display: flex;
    
`;

export const InfoText = styled.Text`
    margin-top: 16px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    margin-left: 42px;

`;

export const Line = styled.View`
    border: 0.2px solid white;
    width: 80%;
    margin-left: 42px;
    margin-top: 10px;
`;

export const ActivityContainer = styled.View`
    display: flex;
    justify-content: center;
`;

export const ActivityText = styled.Text`
    margin-top: 16px;
    margin-left: 16px;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
`;

export const ActivityLine = styled.View`
    border: 0.2px solid white;
    width: 90%;
    margin-left: 16px;
    margin-top: 10px;
`;


export const ConsorcioContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const NewStyle = styled.View`
    margin-top: 16px;
    margin-left: 16px;
    width: 50px;
    height: 24px;
    background-color: #FF1430;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const NewText = styled.Text`
    color: #fff;
    font-weight: bold;

`;