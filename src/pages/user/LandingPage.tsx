import styled from 'styled-components'
import img from "../../assets/apple-icon.svg"
import img1 from "../../assets/google-icon.svg"
import img3 from "../../assets/piggy pics.png"
import img4 from "../../assets/security.png"
import Third from '../../components/static/Third'
import Fourth from '../../components/static/Fourth'
import Button from '../../components/static/Button'
import Button4 from '../../components/static/Button4'
import {AiOutlineArrowRight} from 'react-icons/ai'
import img5 from "../../assets/PHOTO-2022-08-02-17-33-57.jpg"
import img6 from "../../assets/brand3.png"
import img7 from "../../assets/brand2.png"
import img8 from "../../assets/brand1.png"
import Sixth from '../../components/static/Sixth'



const LandingPage = () => {
  return (
    <Container>
      <Main>
       <FirstLayer id="header">
          <Left>
            <Title>The Better Way to Save & Invest.</Title>
            <Text1>PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</Text1>
           <div style={{marginTop:20}}>
           <Button 
           but
           text = "Create free Account"
           />
           </div>
           
            <BHolder>
            <Button4 
            buts
            pics= {img}
            text='Get on iphone'
            />
              <Button4 
            buts
            pics= {img1}
            text='Get on Android'
            />
            </BHolder>
            
          </Left>
          <Right>
            <Pics2 src={img3} />
          </Right>
       </FirstLayer>
       <SecondLayer>
        <Icon src={img4} />
        <Security>
          <STitle>Your security is our priority</STitle>
          <TText>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</TText>
          <TText2> Learn more</TText2>
        </Security>
       </SecondLayer>
      <Third />
       <Fourth />
      </Main>
      <Container2>
                <Left2>
                  <SSTitle>Meet the saver of the month!
</SSTitle>
                  <SSText>Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is specifically helping them shape how they spend and save for future responsibilities.</SSText>
<Div>
<CircleIcon >
    <AiOutlineArrowRight  />
  </CircleIcon>
  <Name>Meet The Soile’s</Name>
</Div>
                </Left2>
                <Right2  src={img5} />
        </Container2>
        <Sixth />
        <Container3>
          <Main3>
          <Title1>As featured in</Title1>
          <PicsHolder>
           <D> <Pics src={img6} /></D>
           <E><Pics1 src={img7} /></E>
           <E><Pics1 src={img8} /></E>
          </PicsHolder>
          </Main3>
        </Container3>
        
    </Container>
  )
}

export default LandingPage


const E = styled.div`
  /* width: 200px; */
  margin-left: 30px;
  object-fit: cover;
  display: flex;
  align-items: end;
`
const D = styled.div`
  width: 150px;
  margin-left: 30px;
  object-fit: cover;
  display: flex;
  align-items: end;
`
const Main3 = styled.div`
width: 90%;
display: flex;
justify-content: center;
`

const Pics1 = styled.img`
  width: 180px;
  margin-right: 30px;
`
const Pics = styled.img`
  width: 150px;
  margin-right: 30px;
`
const PicsHolder = styled.div`
display: flex;
`

const Title1 = styled.div`
font-size: 35px;
font-weight: 700;
margin-right: 200px;
`
const Container3 = styled.div`
display: flex;
background-color: #F9F9F9;
justify-content: center;
align-items: center;
width: 100%;
height: 170px;
`
const SSTitle = styled.div`
margin-left: 30px;
font-size: 50px;
font-weight: 700;
width: 450px;
`
const SSText = styled.div`
font-size: 17px;
/* width: 650px; */
line-height: 25px;
margin-top: 15px;
margin-bottom: 40px;
margin-left: 30px;
width: 450px;
`

const Name = styled.div`
font-size: 15px;
font-weight: 500;

`

const CircleIcon = styled.div`
width: 35px;
height: 35px;
margin-left: 30px;
border-radius: 17px;
color: #4f4fb6 ;
background-color: white ;
margin-right: 10px;
display: flex;
justify-content: center;
align-items: center;
`

const Div = styled.div`
display: flex;
align-items: center;
/* justify-content: center; */
margin-bottom: 35px;
transition: all 300ms ease-in-out;

:hover{ 
margin-left: 10px;
cursor: pointer;
}
`

const Right2 =styled.img`
width: 40%;
height: 100%;
/* background-color: burlywood; */
object-fit: cover;
`

const Left2 =styled.div`
width: 60%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
`

const Container2 =styled.div`
width: 100%;
height: 500px;
background-color: blue;
color: white;
margin-top: 100px;
display: flex;
`

const TText2 = styled.div`
margin-top: 10px;
color: blue;
font-size: 17px;
font-weight: 500;
`
const TText = styled.div`
font-size: 15px;
width: 650px;
line-height: 25px;
margin: 15px 0;
`
const STitle = styled.div`
font-weight: bolder;
font-size: 30px;
`
const Security = styled.div`
width: 600px;
margin-left: 30px;
`

const Icon = styled.img`
width: 90px;
height: 100px;
`

const SecondLayer = styled.div`
width: 100%;
height: 250px;
margin-top: 200px;
margin-left: 80px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 150px;

`
const Pics2 = styled.img`
width: 700px;
height: 700px;
object-fit: cover;
margin-right: 10px;
/* margin-left: 100px; */
`

const BHolder = styled.div`
display: flex;
`

const Text1 = styled.div`
font-size: 19px;
/* width: 400px; */
`
  
const Title = styled.div`
font-weight: bolder;
font-size: 50px;
width: 400px;
margin-bottom: 10px;
`

const Right = styled.div`
width: 56%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
padding-top: 50px;
`

const Left = styled.div`
width: 44%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`

const FirstLayer = styled.div`
width: 100%;
height: 600px;
display: flex;
justify-content: space-between;
`

const Main = styled.div`
width: 85%;
height: 100%;
display: flex;
flex-direction: column;
/* background-color: green; */
align-items: center;
justify-content: center;
`

const Container = styled.div`
width: 100%;
min-height: 100vh;
/* background-color: yellowgreen; */
display: flex;
flex-direction: column;
align-items: center;
padding-top: 40px;
`