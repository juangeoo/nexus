import React from 'react';
import styled from 'styled-components';


const mobile = "900px";

function Main() {
  return (
    <MainContainer className="fullcontainer">
        <Container >
            <InfoContainer>
                <h1>The most transparent crypto bank ever</h1>
                <p>Make fast, flawless payments in crypto and enjoy a full range of advantages. <span>No hidden fees, no surprises.</span></p>
                <button>Get recommended wallet <img src="arrow.svg"></img></button>
                <hr noshade></hr>
                <h2>Digital wallet partners</h2>
                <div>
                    <img className="binance" src="binance.svg"></img>
                    <img className="coinbase" src="coinbase.svg"></img>
                </div>
            </InfoContainer>
            <Img>
                <img data-scroll src="hero.png"></img>
            </Img>
        </Container>
    </MainContainer>
  )
}

export default Main;


const MainContainer = styled.div`
height:100vh;
width:100%;

background: linear-gradient(90.2deg, #DAFF47 0.19%, #B5FF88 46.53%, #50FF96 98.5%);
background-size: 200% 200%;
animation: move 10s alternate infinite; 
display:flex;
justify-content:center;
align-items:center;
color:black;

@media (max-width: ${mobile}){
    width:100%;
}

@keyframes move {
    from{
        backgroud-position:0%;
    }
    to{
        background-position:100% 100%;
    }
}
`


const Container = styled.div`
padding: 0px 140px;
margin:0;
display:flex;
align-items:center;

@media (max-width: ${mobile}){
    display:inline;
    width:90%;
    padding:0px 0px;
}
`

const InfoContainer = styled.div`
display:flex;
flex-direction:column;
width:60%;
gap:25px;
justify-content:center;

@media (max-width: ${mobile}){
    display:inline;
    width:100%;
}

h1{
    font-size:4.5vw;
    font-weight:300;
    margin:0;
    line-height: 5vw;

    @media (max-width: ${mobile}){
        font-size:36px;
        line-height:50px;
        }
    }
}

p{
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    width:55%;
    color: rgb(0,0,0,0.5);

         span{
             color: black;
         }

    @media (max-width: ${mobile}){
        font-size:16px;
        width:100%;
    }
}

button{
    background:transparent;
    font-family: Poppins;
    font-size: 24px;
    text-align:left;
    cursor:pointer;
    width:400px;
    border:none;

    img{
        transition: all 250ms;
    }

    &:hover img{
        transform:translateX(10px);
    }
    

    @media (max-width: ${mobile}){
    
        width:100%;
    }
}

hr{
    width:100%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    margin:0;
    margin-top:75px;

    @media (max-width: ${mobile}){
        margin-top:30%;
    }
}

h2{
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0.39em;
    text-transform:uppercase;
    font-weight:300;
    margin:0;

    @media (max-width: ${mobile}){
        font-size:11px;
        width:100%;
    }
    
}

div{
    display:flex;
    gap:30px;
    align-items: center

    @media (max-width: ${mobile}){
        width:100%;
    }
    
    img{
        width:250px;

        @media (max-width: ${mobile}){
            width:40%;
        }
    }
    .coinbase{
        width:200px;

        @media (max-width: ${mobile}){
            width:40%;
        }
    }
    }
    
}

`

const Img = styled.div`
    width:40%;
 
    img{
        width: 100%;
        filter: drop-shadow(5px 15px 50px #DAFF47);
        }

        @media (max-width: ${mobile}){
            display:none;
        }
    }
`