import React from 'react';
import styled from 'styled-components';

const mobile = "900px";

function Partners() {
  return (
  <PartnersContainer id="partners">
      <img src="binance_gray.svg"></img>
      <img src="coinbase_gray.svg"></img>
      <img src="bitfinex_gray.svg"></img>
      <img src="bitcoin_gray.svg"></img>
  </PartnersContainer>)
}

export default Partners;


const PartnersContainer = styled.div`
display:flex;
padding:50px 140px;
justify-content:space-between;

@media (max-width: ${mobile}){
  flex-direction:column;
  align-items:center;
}  

img{
transition: all 250ms linear;

@media (max-width: ${mobile}){
  margin-top:150px;
 
}  


&:hover{
  filter: opacity(1) drop-shadow(0 0 0 #fff);
  transform:scale(1.1);
}
}
`