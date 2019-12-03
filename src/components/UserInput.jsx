import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
<<<<<<< HEAD
    width : 40vw;
    height : 76vh;
    color :red;
    background-color:rgba(255, 255, 255, 0.5);
`
const Container = styled.div`

`

const Toolbar = styled.div`
    background-color : white;
    width : 100%;
    height : 10%;

`

const InputContainer = styled.form`

`

const Input = styled.input.attrs({type:'textbox'})`
    width : 100%;
    /* height : 50%; */
    height : 400px;
    padding : 15px;
    box-sizing : border-box;
    border : 0;

`

const ClearBtn = styled.input.attrs({type:'button'})`

`

const SubmitBtn = styled.div`
    background-color : lightblue;
    padding : 5px;
    margin : 5px;
    box-sizing : border-box;    
    border-radius : 10px;
    font-size : 2em;
    text-align : center;
    display : inline-block;
    box-shadow : 4px 4px gray;

`

class UserInput extends React.Component {
    // ClearInput = () => {
    //     var delbtn = document.getElementsByTagName("button")[0];
    //     var input = document.getElementsByTagName("input")[0];

    //     for(var i=0; i<input.length; i++){
    //         input[i].value = '';
    //     }
    // }
    constructor (props){
        super(props);
        this.state = {answer:''}
    }

    parentCallback = (ans) =>{
        this.setState({
            data : ans
        })

    }

    ChangeInput = (e) =>{
        this.setState({
            answer : e.target.value
        })
    }

    SubmitInput = () => {
        return this.parentCallback(this.state.answer)
    }
    
    render(){
        return(
            <Wrapper>
            <Container>
                <Toolbar></Toolbar>
                <InputContainer> 
                    <Input placeholder="입력" value = {this.state.answer} onChange={this.ChangeInput}></Input>
                    {/* <ClearBtn onClick={this.DelInput}>삭제</ClearBtn> */}
                    <SubmitBtn onClick={this.SubmitInput}>제출</SubmitBtn>
                    
                </InputContainer>
                <div>{this.state.answer}</div>
            </Container>
        </Wrapper>
    )
}
SubmitInput = () => {
    var userInput = document.getElementsByTagName("input")[0];
    console.log("4");
    if(this.props.InputNum == 1){
        console.log("asdf");
        if(userInput.value == "asdf"){
            alert("정답");
            console.log("ditlqkf");
        }
        else alert("오답");

    }
    console.log("2")
}
}
=======
 background-color:"yellow";
`

const UserInput = props => {
    return(
        <Wrapper>
            UserInput
        </Wrapper>
    )
}
>>>>>>> c2de9f9a722b7d1ba53695ecc1fbfd49192367a4

export default UserInput;