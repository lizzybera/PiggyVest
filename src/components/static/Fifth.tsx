import  React,{useState} from 'react'
import styled from 'styled-components'
import {BsFillArrowDownSquareFill} from "react-icons/bs"
import AboutPage from "../../pages/user/AboutPage"

const Fifth = () => {

    const [count, setCount] = useState <number>(0)

    const onAdd =()=>{
        setCount((el:number) =>el +1)
    } 
    const onSub =()=>{
        setCount((el:number) =>el - 1)
    } 

  return (
    <Container>
        <Main>
            <Icon onClick={onAdd} t="q"/>
            <Count>{count}</Count>
            <Icon onClick={onSub} t="e"/>
        </Main>
        {/* <AboutPage counted={count}/> */}
    </Container>
  )
}

export default Fifth

// const Container = styled.div`

// `

const Icon = styled(BsFillArrowDownSquareFill)<{t: string}>`
color: white;
font-size: 30px;
transform: ${({t}) => t ? 'rotate{100deg}' : "rotate{0deg}" };
transition: all 350ms;

:hover{
    cursor: pointer;
    transform: scale(1.05);
}
`
const Count = styled.div`
font-size: 360px;
font-weight: 500;
margin: 40px 0;
line-height: 1;
`


const Main = styled.div`
width: 400px;
height: 600px;
background-color: #7656e9;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 5px;
`

const Container = styled.div`
width: 100%;
min-height: 800px;
/* background-color: blue; */
margin-top: 10px;
display: flex;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`