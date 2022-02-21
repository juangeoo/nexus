import React from 'react';
import styled from 'styled-components';
import { FeaturesItems } from './FeaturesItems';

const mobile = "900px";

function Features() {
  return (
    <FeaturesContainer id="features">

    <div className="features_text">
        <h2>We hand everything complicated so you can spend your time on what matters.</h2>
        <h1>Next generation wallet.</h1>
    </div>

  <div className="features_card-container">
      {FeaturesItems.map ((item, index) =>
      
      <div className="features_card">
          <img src={item.icon}></img>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
      </div>

      )}
  </div>
</FeaturesContainer>
  )
}

export default Features;


const FeaturesContainer = styled.div`
  font-family:"Poppins";
  margin-top:-20px;
  padding:100px 140px;

  @media (max-width: ${mobile}){
    padding: 30px;
  }  

  .features_text{
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media (max-width: ${mobile}){
      flex-direction:column;
      align-items:flex-start;
      margin-top:30px;
    }  

    h2{
      background: -webkit-linear-gradient(263.76deg, #DAFF47 7.02%, #B5FF88 62.88%, #88FFB8 116.47%);
      font-size:42px;
      width:55%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight:600;

      @media (max-width: ${mobile}){
        align-items:flex-start;
        width:100%;
        font-size:32px;
      }  
    }

    h1{
      font-family:"Michroma";
      font-size:48px;
      text-align:right;
      font-weight:400;
      width:30%;

      @media (max-width: ${mobile}){
        align-self:flex-end;
        text-align:right;
        width:100%;
      }  
    }

  }

  .features_card-container{
    display:flex;
    flex-wrap:wrap;
    text-align:center;
    border: 1px solid #4B4B4B;
    padding:50px 0px;
    justify-content:center;
    align-items:start;
    
    margin-top:140px;
  }

  .features_card{
    padding:25px;
    width:400px;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    transition: all 250ms;

    &:hover{
      transform:scale(1.1);
      background: linear-gradient(180deg, #CEFF5C -292.6%, rgba(196, 196, 196, 0) 69.6%);
    }

    img{
      width:15%;
    }

    h2{
      font-weight:400;
      margin:10px;
    }

    p{
      padding: 0px 20px;
      color: rgba(255, 255, 255, 0.5);
      font-weight:300;
      margin:10px;
    }
  }
`
