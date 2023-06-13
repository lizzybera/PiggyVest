import styled from 'styled-components'
import Button from './Button'
import Button4 from './Button4'
import img from "../../assets/apple-icon.svg"
import img1 from "../../assets/google-icon.svg"
import img2 from "../../assets/Screenshot 2023-05-26 210719.png"

const Sixth = () => {
  return (
    <div>
        <Container>
        <Right>
          <Pics src={img2} />
        </Right>
        <Left> 
        <Title>4 Million + customers
        </Title>
        <Text>Since launching in 2016, over 4,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable.
        </Text>
        <Button 
           but
           text = "Create free Account"
           />
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
        </Container>
    </div>
  )
}

export default Sixth

// const Container =styled.div``


const Pics =styled.img`
object-fit: cover;
width: 500px;
height: 400px;
`

const BHolder = styled.div`
display: flex;
/* margin-top: 10px; */
`

const Right = styled.div`
width: 600px;
height: 100%;
/* background-color: pink; */
display: flex;
justify-content: center;
align-items: center;
`

// const Button2 = styled.div`
// width: 130px;
// height: 52px;
// background-color: black;
// color: white;
// border: 1px solid gray;
// border-radius: 10px;
// display: flex;
// justify-content: center;
// align-items: center;
// font-weight: 500;
// font-size: 18px;
// /* margin-left: 10px; */
// transition: all 300ms ease-in-out;

// :hover{
//   cursor: pointer;
//   background-color: blue;
// }
// `

const Title = styled.div`
font-weight: 600;
width: 350px;
font-size: 33px;
margin: 15px 0;
`
const Text = styled.div`
font-size: 18px;
width: 450px;
line-height: 25px;
margin-bottom: 20px;
`

const Left = styled.div`
width: 700px;
height: 100%;
/* background-color: pink; */
display: flex;
flex-direction: column;
justify-content: center;
`

const Container = styled.div`
display: flex;
/* background-color: yellow; */
width: 100%;
height: 500px;
margin-top: 100px;
`