import React from 'react';
import styled from 'styled-components';
import imageBg from '../assets/background.jpg'
const BackgroundImage = styled.div`

  height: 100vh;
  width: auto;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  position: relative;
`
const BackgroundOverylay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

function BackgroundBlock ({src,height = 100,children}) {
  return (
    <BackgroundImage src={imageBg} >
      <BackgroundOverylay >
        {children}
      </BackgroundOverylay>
    </BackgroundImage>
  )
}

export default BackgroundBlock;