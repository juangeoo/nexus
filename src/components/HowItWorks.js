import React from 'react';
import styled from 'styled-components';
import { HowItWorksItems } from './HowItWorksItems';

const mobile = "900px";

function HowItWorks() {
  return (
  <Container id="howitworks">
    <div>
    <img src="hero2.png"></img></div>
    <div className="container_info">
       <h2>One single wallet does it all.</h2>
        <h1>How to get started with Lorem</h1>

        <div>
            {HowItWorksItems.map ((item, index) =>
                <div className="container_items">
                  <div className="container_items-numbertitle">
                      <h1>{item.number}</h1>
                      <h2>{item.title}</h2>
                  </div>
                   <p>{item.desc}</p>
                 </div>
        )}
        </div>
    </div>
  </Container>)
}

export default HowItWorks;


const Container = styled.div`
display:flex;
text-align:center;
justify-content:space-between;
padding:100px 140px;

@media (max-width: ${mobile}){
  flex-direction:column;
  align-items:center;
  padding: 30px;
}  

img{
  filter: drop-shadow(5px 10px 60px #9AE574);
  width:100%;

  @media (max-width: ${mobile}){
    padding:50px 0px;
  }  
}

.container_info{
  text-align:right;
  
  @media (max-width: ${mobile}){
    width:100%;
  }  

  h2{
    background: -webkit-linear-gradient(263.76deg, #DAFF47 7.02%, #B5FF88 62.88%, #88FFB8 116.47%);
    font-size:32px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight:600;
    font-family:"Poppins";
  }

  h1{
    font-family:"Michroma";
    font-size:48px;
    text-align:right;
    font-weight:400;  

    @media (max-width: ${mobile}){
      font-size:42px;
    }  
  }
}

.container_items{
    display:flex;
    border: 1px solid #4B4B4B;
    padding:25px 50px;
    align-items:center;
    margin-top:30px;

    @media (max-width: ${mobile}){
      flex-direction:column;
    }  

    p{
      padding: 0px 20px;
      color: rgba(255, 255, 255, 0.5);
      font-weight:300;
      margin:10px;
      width:400px;
      font-family:"Poppins";
      text-align:left;

      @media (max-width: ${mobile}){
        width:100%;
        
      }  
    }

    .container_items-numbertitle{
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      text-align:left;
      border:none;

      h2{
        font-size:22px;
        width:300px;
      }

      h1{
        text-align:left;
      }
    }
  }
}
`