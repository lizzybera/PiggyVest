// import {useState,useContext} from 'react'
// import styled from 'styled-components'
// import {BsFillArrowDownSquareFill} from "react-icons/bs"
// import Button2 from '../../components/static/Button2'
// import InputProps from '../../components/reUse/InputProps'
// import { GlobalContext } from '../../Global/GlobalProvider'
// import { log } from 'console'

// interface iprops{
//     counted?: number
// }

// const Fifth = () => {

//     const [count, setCount] = useState <number>(0)

//     const onAdd =()=>{
//         setCount((el:number) =>el +1)
//     } 

//     const {actualName, actualEmail, actualPassword} =   useContext(GlobalContext)


//   return (
//     <Container>
//         {/* <Main>
//             <Icon t="q"/>
//             <Count>0</Count>
//             <Icon t="e"/>

//                 <br/>

//         </Main> */}
//         {actualName}        
// <InputProps 
//             name1= "phone number"
//             namePlace="Enter your name"
//             name
//             />
//             <InputProps 
//             email1= "phone number"
//             emailPlace="Enter your Phone Number"
//             email
//             />
//             <InputProps 
//             password1= "phone number"
//             passwordPlace="Enter your password"
//             password
//             />
//             <InputProps
//             confirm1= "phone number"
//             confirmPlace="confrim your password"
//             confirm
//             />

//             <Button2 
//             c = "white"
//             bg = "#0a4887"
//             tittle = "submit"
//             onClick  ={() =>{
//                 console.log("Name", actualName)
//                 console.log("Address", actualPassword)
//                 console.log("Phone Number", actualEmail)

//             }}
//             />
//     </Container>
//   )
// }

// export default Fifth

// // const Container = styled.div`

// // `

// const Icon = styled(BsFillArrowDownSquareFill)<{t: string}>`
// color: white;
// font-size: 30px;
// transform: ${({t}) => t ? 'rotate{100deg}' : "rotate{0deg}" };
// transition: all 350ms;

// :hover{
//     cursor: pointer;
//     transform: scale(1.05);
// }
// `
// const Count = styled.div`
// font-size: 360px;
// font-weight: 500;
// margin: 40px 0;
// line-height: 1;
// `


// const Main = styled.div`
// width: 400px;
// height: 600px;
// background-color: #7656e9;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// border-radius: 5px;
// `

// const Container = styled.div`
// width: 100%;
// height: 800px;
// /* background-color: blue; */
// margin-top: 10px;
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// `

import React from 'react'

const AboutPage = () => {
  return (
    <div>AboutPage</div>
  )
}

export default AboutPage