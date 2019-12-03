import React from 'react';
import styled from 'styled-components';
import Question from '../components/QuestionContainer';
import Banner from '../components/Banner';
import UserInput from '../components/UserInput';

const Wrapper = styled.div`

`

class Exercise extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <>
            <div>
            <Banner /> 
            <Question />
            <UserInput />
            </div>
            </>
        )
    }
}

export default Exercise;