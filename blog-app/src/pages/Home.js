import React from 'react';
import Styled from 'styled-components';
import BackgroundBlock from '../components/BackgroundBlock';
import { Title, Subtitle} from '../components/Typography';


const arr = new Array(1000).fill(
  '55555555555555555555555555555555555555555555555555555555555555555555555555555555555555'
)

const Button = Styled.button`
  padding: 1rem .5rem;
  background-color: transparent ;
  border : #fff solid 3px ;
  border-radius: 8px;
  margin: 2rem;
  color: #fff;
  cursor: pointer;
  transition: background-color .3s;
  text-transfrom: uppercase;

    &:hover{
      background-color: #fff;
      color: #000;
    }
`
const Content = Styled.div`
  padding: 8rem;
`

function Home () {
  return (
    <div>
        <BackgroundBlock>
          <Title>Back for</Title>
          <Subtitle>555555555555555555</Subtitle>
          <Button as='a' href='#content'>Look around</Button>
        </BackgroundBlock>
      <Content id='content'>
      <div>
        {arr.map((text,index)=>(
          <p key = {index}>{text}</p>
        ))}
      </div>
      </Content>
    </div>
  )
}

export default Home;