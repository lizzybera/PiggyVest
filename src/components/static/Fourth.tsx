import styled from 'styled-components'
import img from "../../assets/invest.png"

const Fourth = () => {
  return (
    <Container>
        <Left src={img}>
        </Left>
        <Right>
            <Percentage>Up To 25% Returns</Percentage>
            <Title>Access investment opportunities</Title>
            <Text>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</Text>
            <NText>Learn more about Investments</NText>
        </Right>
    </Container>
  )
}

export default Fourth

const NText = styled.div`
margin-top: 30px;
font-size: 18px;
color: purple;
font-weight: 500;
`
const Text = styled.div`
margin-top: 20px;
font-size: 18px;
font-weight: 250;
width:450px;
`

const Title = styled.div`
font-size: 50px;
font-weight: 500;
margin-top: 20px;
`
const Percentage = styled.div`
width: 160px;
height: 35px;
font-weight: 500;
color: blue;
background-color: #eceaea;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
`

const Right = styled.div`
width: 500px;
height: 100%;
/* background-color: #be15b0; */
display: flex;
flex-direction: column;
justify-content: center;
`

// const Right = styled.div``

const Left = styled.img`
height: 100%;
/* background-color: yellow; */
height: 100%;
object-fit: cover;
margin-right: 30px;
display: flex;
justify-content: end;
`

const Container = styled.div`
    width: 100%;
    height: 600px;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    margin-top: 100px;
`