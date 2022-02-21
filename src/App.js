import React from 'react';
import Header from "./components/Header"
import Main from "./components/Main"
import Features from './components/Features';
import Partners from './components/Partners';
import HowItWorks from './components/HowItWorks';
import GetStarted from './components/GetStarted';
import styled from 'styled-components';


function App() {
  return (
        <Container>
          <Header />
          <Main />
          <Features />
          <Partners />
          <HowItWorks />
          <GetStarted />
       </Container>
  );
}

export default App;


const Container = styled.div`
box-sizing: content-box;
width: 100%;
overflow-x:hidden;
`