import React from 'react'
import styled from 'styled-components'
import img from "../../assets/logo.svg"
import img2 from "../../assets/compliance-f24fa70ce98ff6f4dcdfddeefc2bdd5a.png"
import {Link} from "react-scroll"
import {BsArrowUpCircle} from "react-icons/bs"

const Footer = () => {
  return (
    <div>
      <Container>
      <Main>
       <SubMain>
       <LogoHolder>
        <Logo src={img} />
        <Logo1 src={img2} />
       </LogoHolder>

       <TextHolder>
        <Title> Product</Title>
        <Text> Piggybank</Text>
        <Text> Invest</Text>
        <Text> Safelock</Text>
        <Text> Target Savings</Text>
        <Text> Flex Naira</Text>
       </TextHolder>

       <TextHolder>
        <Title> Company</Title>
        <Text> About</Text>
        <Text> FAQs</Text>
        <Text> Blog</Text>
       </TextHolder>

       <TextHolder>
        <Title> Legal</Title>
        <Text> Terms</Text>
        <Text> Privacy</Text>
        <Text> Security</Text>
       </TextHolder>

       <TextHolder>
        <Title> Legal</Title>
        <Text> Terms</Text>
        <Text> Privacy</Text>
        <Text> Security</Text>
       </TextHolder>
       </SubMain>

       <SubMain2>
        <Text> Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, our</Text>
        <Text> customers have saved and invested billions of Naira that they would normally be tempted to spend.</Text>
        <Year>2016 - 2022 PiggyTech Global Limited - RC 1405222</Year>

      </SubMain2>
      </Main>
    </Container>
     <div>
        <BoxHolder>
          <Box to='header' duration={600} smooth>
            <BsArrowUpCircle />
          </Box>
        </BoxHolder>
        </div>
    </div>
  )
}

const Box = styled(Link)`
width: 50px;
/* background-color: pink; */
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
border-radius: 25px;
font-size: 50px;

:hover{
  cursor: pointer;
}
`
const BoxHolder = styled.div`
display: flex;
height: 50px;
width: 100%;
justify-content: end;
/* background-color: blue; */
margin-bottom: 30px;
`

export default Footer


const SubMain2 = styled.div`
margin-top: 60px;
text-align: center;
`

const Year = styled.div`
margin-top: 40px;
color: blue;
`

const SubMain = styled.div`
display: flex;
justify-content: space-between;
`
const Text = styled.div`
margin-bottom: 10px;
font-size: 15px;
`

const Title = styled.div`
font-weight: bold;
margin-bottom: 20px;
`

const TextHolder = styled.div`
`

const Logo1 = styled.img`
width: 120px;
margin-bottom: 25px;
border-radius: 10px;
border: 1px solid lightgray;
`
const Logo = styled.img`
margin-bottom: 25px;
border-radius: 10px;
`

const LogoHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Main = styled.div`
width: 80%;
height: 100%;
margin-top: 80px;
`

const Container = styled.div`
width: 100%;
min-height: 80px;
/* background-color: yellowgreen; */
display: flex;
justify-content: center;
`