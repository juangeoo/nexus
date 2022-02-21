import React from 'react';
import styled from 'styled-components';

const mobile = "900px";

function GetStarted() {
  return (
  <Container id="getstarted">
      <div className="container-info">
        <h1>Get started with Lorem</h1>
        <p>Download the app now to connect with the most transparent banking experience.</p>
        <div className="flex-buttons">
          <img src="android.png"></img>
          <img src="iphone.png"></img>
        </div>
        <h1>542,452</h1>
        <h2>users trust us</h2>
      </div>
  </Container>)
}

export default GetStarted;


const Container = styled.div`
color:black;
background: radial-gradient(127.58% 403.21% at -5.49% 92.73%, #DAFF47 0%, #B5FF88 47.14%, #88FFB8 100%);
padding: 30px 0px;
text-align:center;

.flex-buttons{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:30px;
  margin-top:30px;

  img{
    cursor:pointer;
  }
}

.container-info{
display:flex;
flex-direction:column;
align-items:center;
}

h1{
  font-weight:500;
  font-size:50px;
}

h2{
  color: rgba(0, 0, 0, 0.5);
  font-weight: 300;
  margin:0;
}

p{
  font-family: Poppins;
  font-weight: 300;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
  width:30%;
  margin:0;
}

@media (max-width: ${mobile}){
  padding:15px;

  h1{
    font-size:32px;
  }

  p{
    width:100%;
  }

  .flex-buttons{
    flex-direction:column;
  }
}
`