import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Logo, ActionContainer,  Action  } from './styles'
import useScroll from '../../utils/useScroll'

function NavBar () {
  const isScroll = useScroll({ scrollRang: 20})


  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <Logo >Logo</Logo>
        <ActionContainer>
         <Action>
           <Link to='/'>Home</Link>
         </Action>
         <Action>
           <Link to='/about'>About</Link>
         </Action>
         <Action>
           <Link to='/contact'>Contact</Link>
         </Action>
         <Action>
           <Link to='/story'>Story</Link>
         </Action>
         
        </ActionContainer>
      </Wrapper>
    </Container>
  )
}

export default NavBar
