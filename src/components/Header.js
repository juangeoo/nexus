import React from 'react';
import styled from 'styled-components';
import { MenuItems } from './MenuItems';

const mobile = "900px";

function Header() {

  return (


    <HeaderContainer>
      <div className="container_logo">
      <Logo src="logo.svg"></Logo>
      </div>

      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>

      <Hamburger src="menu.svg"></Hamburger>
    </HeaderContainer>
  )
}

export default Header;



const HeaderContainer = styled.nav`
position:absolute;
width:100%;
margin-left:140px;
display:flex;
margin-top:25px;
gap:120px;
color:white;
z-index:90;

.scrollNav{
  background-color:blue;
}

@media (max-width: ${mobile}){
  padding-left: 0;
  justify-content:space-between;
  width:100%;
  margin-top:25px;
  margin-left:0px;
}

.containerlogo{
  width:200px;
}

ul{
  list-style:none;
  display:flex;
  gap:75px;
  
  

  @media (max-width: ${mobile}){
    display:none;
  }

  .nav-links{
    text-decoration:none;
    color:black;
    font-size:16px;
    font-weight:500;
  }

  .nav-links-featured{
    border: 1px solid black;
    align-self:flex-end;
    padding:8px 25px;
    text-decoration:none;
    color:black;
  }
}
`

const Logo = styled.img`
@media (max-width: ${mobile}){
  margin-left:30px;
}
`

const Hamburger = styled.img`
display:none;

@media (max-width: ${mobile}){
  display:block;
  margin-right:30px;
}
`
