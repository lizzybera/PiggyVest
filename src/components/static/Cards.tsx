import styled from 'styled-components'
// import img from "../../assets/piggy.png"
import {AiOutlineArrowRight} from 'react-icons/ai'

interface iCards{
  card?: boolean,
  firstIcon?: any,
  title?: string,
  text?: string,
  bg?: string,
  c?:string,
  text2?: string

}


const Cards: React.FC<iCards> = ({card, firstIcon,title, text, bg, c, text2}) => {
  return (
    <div>
       {
        card? 
        <Card>
        <THolder>
        <FIcon src={firstIcon} />
        <CTitle>
        {title}
        </CTitle>
        <Text>{text}
</Text>
        </THolder>
<Div>
<CircleIcon bg={`${bg}`} c={`${c}`}>
    <AiOutlineArrowRight  />
  </CircleIcon>
  <Name>{text2}</Name>
</Div>
    </Card> : null
       }
    </div>
  )
}

export default Cards

const Text = styled.div`
font-size: 15px;
/* width: 650px; */
line-height: 25px;
margin-bottom: 40px;
font-weight: 500;
`

const THolder = styled.div``

const Name = styled.div`
font-size: 15px;
font-weight: 500;

`

const CircleIcon = styled.div<{bg: string, c: string}>`
width: 35px;
height: 35px;
border-radius: 17px;
color: ${({c})=>c};
background-color: ${({bg})=>bg};
margin-right: 10px;
display: flex;
justify-content: center;
align-items: center;
/* border: 2px solid lightblue; */
`

const Div = styled.div`
display: flex;
align-items: center;
margin-bottom: 35px;
transition: all 300ms ease-in-out;

:hover{ 
margin-left: 10px;
/* color: green; */
cursor: pointer;
}
/* flex: 1; */
`

const CTitle = styled.div`
font-weight: 700;
width: 250px;
font-size: 25px;
margin-top: 20px;
margin-bottom: 20px;
`

const FIcon = styled.img`
width: 50px;
height: 50px;
background-color: aliceblue;
margin-top: 35px;
object-fit: cover;
border-top-left-radius: 20px;
border-bottom-right-radius:20px;
border-top-right-radius: 20px;
`


const Card = styled.div`
width: 280px;
height: 350px;
background-color: #F9F9F9;
margin: 0 13px;
margin-bottom: 30px;
border-radius: 20px;
padding: 0px 40px;
display: flex;
flex-direction: column;
justify-content: space-between;
/* flex: 1; */
`