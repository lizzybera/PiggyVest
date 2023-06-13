import styled from 'styled-components'
import img5 from "../../assets/piggy.png"
import img6 from "../../assets/safelock.png"
import img8 from "../../assets/flex.png"
import img7 from "../../assets/target.png"
import Cards from './Cards'

const Third = () => {
  return (
    <Container>
        <Left> 
        <Title>4 ways to build your savings.
        </Title>
        <Text>Earn 5%-15% when you save with any of these PiggyVest plans.
        </Text>
        <Button2> Start Saving</Button2>
        </Left>
        <Right>
        <CardHolder>
        <Cards 
       card
  firstIcon={img5}
  title="Automated Savings"
  text= "Build a dedicated savings faster on your terms automatically or manually."
  bg= "#E0EFFF"
  c="#320faf"
  text2="PiggyVest"
       />
       <Cards 
       card
  firstIcon={img6}
  title="Fixed Savings"
  text= "Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit."
  bg= "#E3F5FF"
  c="#399AFF"
  text2="Safelock"
       />
        </CardHolder>
        <CardHolder>
        <Cards 
       card
  firstIcon={img7}
  title="Flexible Savings"
  text= "Save, transfer, withdraw, manage and organise your money for free at any time."
  bg= "#c9fbe1"
  c="#77c597"
  text2="Flex Naira"
       />
       <Cards 
       card
  firstIcon={img8}
  title="Automated Savings"
  text= "Build a dedicated savings faster on your terms automatically or manually."
  bg= "#f0d2d2"
  c="#E5288E"
  text2="PiggyVest"
       />
        </CardHolder>
        </Right>
    </Container>
  )
}

export default Third

// const Container = styled.div``
// const THolder = styled.div``


const CardHolder = styled.div`
display: flex;
flex-wrap: wrap;
margin-left: 30px;
`

const Right = styled.div`
/* background-color: red; */
width: 70%;
height: 100%;
/* display: flex;
flex-direction: column; */
`

const Button2 = styled.div`
width: 130px;
height: 52px;
background-color: black;
color: white;
border: 1px solid gray;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 18px;
/* margin-left: 10px; */
transition: all 300ms ease-in-out;

:hover{
  cursor: pointer;
  background-color: blue;
}
`

const Title = styled.div`
font-weight: 700;
width: 250px;
font-size: 33px;
margin: 10px 0;
`
const Text = styled.div`
font-size: 18px;
/* width: 650px; */
line-height: 25px;
margin-bottom: 40px;
`

const Left = styled.div`
width: 30%;
height: 350px;
/* background-color: pink; */
display: flex;
flex-direction: column;
justify-content: center;
`

const Container = styled.div`
width: 100%;
min-height: 600px;
display: flex;
`