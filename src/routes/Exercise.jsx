import React, { Component } from 'react';
import styled from 'styled-components';

import Question from '../components/Question';
import UserInput from '../components/UserInput';
import { stat } from 'fs';


const Wrapper = styled.div`
    width : 100vw;
    height : 100vh;

    display : flex;
    justify-content : space-around;
    align-items:center;
    overflow : hidden;
    background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; 
 background-blend-mode: multiply,multiply;
`

class Exercise extends Component {
    constructor(props){
        super(props)
        this.state={
            data : '',
            input : ''
        }
    }

    checkData = (data) => {
        switch(this.state.data){
        case 1:return;
        case 2:return;
        case 3:return;
        case 4:return;
        case 5:return;

        }
    }

    render(){

        return (
            <Wrapper>
                <Question name = "박서영"/>
                <UserInput />
            </Wrapper>
        );
    }
};

export default Exercise;