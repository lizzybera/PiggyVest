import {useState} from "react"
import styled from 'styled-components'
import img from "../../assets/logo.svg"
import {NavLink} from "react-router-dom"
import Button from '../static/Button'

const UserHeader = () => {

  const [show, setShow] = useState<boolean>(false)

  const changeColor =()=>{
    if(window.scrollY >= 100){
      setShow(false)
    }else{
      setShow(true)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div>
      {
      show ? <Container bg="white" bb="none" >
      <Main>
        <NavHolder>
        <Logo src={img} />
          <Navs to="/"> Save </Navs>
          <Navs to="about"> Invest </Navs>
          <Navs to="/"> Stories </Navs>
          <Navs to="/"> FAQs </Navs>
          <Navs to="/"> Resources </Navs>
        </NavHolder>
        <ButtonHolder>
        <Button1>Sign in</Button1>
        <div style={{paddingLeft:20}}>
        <Button 
        but
        text="Create free Account"
        />
        </div>
        </ButtonHolder>
      </Main>
    </Container> :<Container bg="white" bb=" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;">
    <Main>
      <NavHolder>
      <Logo src={img} />
        <Navs to="/"> Save </Navs>
        <Navs to="about"> Invest </Navs>
        <Navs to="/"> Stories </Navs>
        <Navs to="/"> FAQs </Navs>
        <Navs to="/"> Resources </Navs>
      </NavHolder>
      <ButtonHolder>
      <Button1>Sign in</Button1>
      <div style={{paddingLeft:20}}>
      <Button 
      but
      text="Create free Account"
      />
      </div>
      </ButtonHolder>
    </Main>
  </Container>
    }
    </div>
  )
}

export default UserHeader



const Button1 = styled.div`
width: 100px;
height: 55px;
background-color: white;
border: 1px solid gray;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 18px;
transition: all 300ms ease-in-out;

:hover{
  cursor: pointer;
  color: blue;
  border: 1px solid blue;
}
`
  
const ButtonHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Navs = styled(NavLink)`
font-size: 18px;
font-weight: 500;
margin-left: 30px;
color: #494848;
text-decoration: none;
`

const NavHolder = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Logo = styled.img`
width: 180px;
margin-right: 10px;
`

const Main = styled.div`
width: 85%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div<{bg:string, bb: string}>`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
background-color: ${({bg})=> bg};
position: fixed;
box-shadow: ${({bb})=> bb};
`