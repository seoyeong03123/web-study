import React, {Component} from 'react';
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Nanum Myeongjo', serif;
        font-family: 'Song Myung', serif;
        margin : 0;
        width:100vw;
        height:100vh;
        background-image: linear-gradient(-210deg, #FF057C 0%, #7C64D5 48%, #4CC3FF 100%);
        display : flex;
        overflow : hidden;
    }
`

const TitleWrapper = styled.div`   

    position : relative;
    left : 20vw;
    top : 24.5vh;
    color : lightgray;
    font-size : 7em;
    margin : 0;

`;

const UserWrapper = styled.form`
    position : absolute;
    right : 15vw;
    top : 30vh;
    padding : 2vh 4vw; 
    color : deeppink;
    font-size : 1.27em;
    background-color : rgba(255,255,255,0.5);
    box-sizing : border-box;
    width : 30vw;
    display : flex;
    align-items : center;
    flex-direction : column;

    & > label{
        display:flex;
        margin : 0.5vw;
    }
`;

const UserIcon = styled.div`
    width:2.5vw;
    height:auto;
    padding-right : 1.2vw;

    & > img{
        width:100%;
        height:100%;
        opacity:0.6;
        }

`

const UserInput = styled.input`
    font-family : 'Nanum Myeongjo', serif;
    font-family : 'Song Myung', serif;
    font-size : 1em;
    background-color : transparent;
    border : none;
    margin : 10px;
    color: deeppink;
`;

const StartBtn = styled.button `
    font-family : 'Nanum Myeongjo', serif;
    font-family : 'Song Myung', serif;
    border : none;
    margin: 0.5vw;
    width : 15vw;
    height : 5vh;
    color : #eee;
    background-color : deeppink;
`


class Main extends Component {

    redirectToHome = () => {
        const { history } = this.props;
        if(history) history.push('/exercise');
    }
    
    render(){
        const { history } = this.props;
        return (
            <div className="mainConitner">
                <link href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo|Song+Myung&display=swap" rel="stylesheet"></link>
                <GlobalStyle />
                <TitleWrapper>
                    즐거운 <br/>코딩연습
                </TitleWrapper>
                <UserWrapper>
                    <label><UserIcon><img src="/user.svg" alt="userImg"/></UserIcon><UserInput placeholder="UserName"/></label>
                    <label><UserIcon><img src="/lock.svg" alt="passImg"/></UserIcon><UserInput placeholder="Password" type="password"/></label>
                    <StartBtn onClick={()=>{history.push('/exercise')}}>START</StartBtn>
                </UserWrapper>
            </div>
        );
    }
};


export default Main;