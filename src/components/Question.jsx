<<<<<<< HEAD
// https://velopert.com/3480

import React from "react";
import styled from "styled-components";
import { blockStatement } from "@babel/types";

const Wrapper = styled.div`
  color: white;
  /* margin: 0 auto; */
  width: 40vw;
  height : 80vh;

`;

const Contents = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  height : 100%;
`

const QusetWrapper = styled.div`
width : 100%;
height : 45%;
padding : 8%;
border : 1px solid pink;
margin : 2vh 0;
box-sizing : border-box;
background-color : #fff;
color : black;
  
`
const Quest = styled.form`

  height :20vh;
  box-sizing : border-box;

  & > h1{
    margin : 0;
  }
`

const BtnContainer = styled.div`
  height : 15%;
  display : flex;
  justify-content: space-between;
  position : relative;

`

const BtnLeft = styled.button`

width : 4vw;
height : 4vh;

`;

const BtnRight = styled(BtnLeft)`
`;


const Hint = styled.div`
  width : 100%;
  height : 45%;
  padding : 4%;
  margin : 2vh 0;
  box-sizing : border-box;
  background-color : violet;

`

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: 0 };
    };

  praentCallback = (ipt) =>{
    this.setState({
      ipt : this.state.input
    })
  }

  Quest = (num) => {
    var box = document.getElementsByClassName("box")[0];

    if(num == 1) {
      box.innerHTML="<h1>안녕하세요</h1>";
    }
    else if(num == 2){
      box.innerHTML="<a href = 'https://www.google.com'>구글로 이동</a>";
    }
    else if(num == 3) {
      box.innerHTML = "<mark>하이라이트</mark>";
    }
    else if(num == 4) {
      box.innerHTML = "<i>이탤릭</i>";
    }
    else if(num == 5){
      box.innerHTML = "주제의<hr>분리";
    }
  }

  onClickLeft = () => {
    var hintbox = document.getElementsByClassName("hintbox")[0];

    if(this.state.input <= 0){
      console.log("못가유~");
    }
    else{
    this.setState({
      input : --this.state.input
    })
    }
    console.log(this.state.input);

    return this.Quest(this.state.input)
  }

  onClickRight = () => {
    var hintbox = document.getElementsByClassName("hintbox")[0];
    if(this.state.input <5){
      this.setState({
        input : ++this.state.input 
      })
    }
    else{
      this.setState({
        input : this.state.input = 5
      })
    }

    console.log(this.state.input);
    
    var hintbox = document.getElementsByClassName("hintbox")[0];
    if(this.state.input != 5){
    hintbox.innerHTML="click";
    }
    return this.Quest(this.state.input)
  }

  Btn = () => {
    var btn = document.getElementsByTagName("button")[0];
    if(this.state.input == 0){
      btn.style.color="gray";
    }
    else if(this.state.input >= 1){
      btn.style.color="black";
    }
  }

  Hint = () =>{

    var hintbox = document.getElementsByClassName("hintbox")[0];
    if(this.state.input == 1){
      hintbox.innerHTML="&lthn&gt태그를 이용하면 제목같이 크고 굵은 글씨를 쓸 수 있어요."
    }
    else if(this.state.input == 2){
      hintbox.innerHTML = "&lta&gt태그를 이용하면 다른 페이지로 넘너가는 링크를 만들 수 있어요."
    }
    else if(this.state.input == 3){
      hintbox.innerHTML = "&ltmark&gt태그를 이용하면 하이라이팅 효과를 낼 수 있어요."
    }
    else if(this.state.input == 4){
      hintbox.innerHTML = "&lti&gt태그를 이용하면 기울어진 글꼴을 쓸 수 있어요."
    }
    else if(this.state.input == 5){
      hintbox.innerHTML = "&lthr&gt태그를 이용하면 주제를 구분하는 수평선을 그을 수 있어요."
    }
  }

  render(){
    const { input } = this.state; 
    let inputNum = this.state.input;
  return (
    <Wrapper>
        <Contents>
        <QusetWrapper>
          <Quest className = "box" value = {input}></Quest>
          <BtnContainer>
            <BtnLeft onClick = {this.onClickLeft}>{"<"}</BtnLeft>
            <BtnRight onClick = {this.onClickRight}>{">"}</BtnRight>
          </BtnContainer>
        </QusetWrapper>
        <Hint className="hintbox" onClick = {this.Hint}>click</Hint>
      </Contents>
    </Wrapper>
  );
  }
};
export default Question;
=======
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
 background-color:red;
`

const Question = props => {
    return(
        <Wrapper>
            <div>Question</div>
        </Wrapper>
    )
}

export default Question; 
>>>>>>> c2de9f9a722b7d1ba53695ecc1fbfd49192367a4
