<<<<<<< HEAD
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

import Main from './routes/Main';
import Exercise from './routes/Exercise';

const Wrapper = styled.div`
    margin : 0;
`

const GlobalStyle = createGlobalStyle`
    body{
        margin : 0;
    }
`



class App extends Component {
    render(){
    return (
        <Router>
            <GlobalStyle />
            <Wrapper>
                
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/exercise" component={Exercise} name="박서영"/>
                </Switch>
                
            </Wrapper>
        </Router>
    );
    }
};

export default App;
=======
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './pages/Main';
import Exercise from "./pages/Exercise";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" components={Main}/>
        <Route path="/exercise" components={Exercise}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
>>>>>>> c2de9f9a722b7d1ba53695ecc1fbfd49192367a4
