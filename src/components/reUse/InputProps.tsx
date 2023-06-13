// import React from 'react'
// import {useContext } from "react"
// import styled from "styled-components"
// import { iProps } from '../../Utils/Interfaces'
// import { GlobalContext } from '../../Global/GlobalProvider'



// const input: React.FC<iProps> = ({ name, email, password, confirm, name1, namePlace, email1, emailPlace, password1, passwordPlace, confirm1, confirmPlace}) => {
//   const {
//     actualName,
//      setActualName,

//      actualPassword,
//      setActualPassword,

//      actualEmail,
//      setActualEmail,
     
//      actualConfirm,
//      setActualConfirm,
//     }=   useContext(GlobalContext)
//   return (
//     <Container>
//         <Main>
            
//            {
//             name ? 
//              (<InputHolder>
//              <Text>{name1}</Text>
//          <Inputdata>
//          <Input  placeholder = {`${namePlace}`}
//          value={actualName} 
//          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
//           setActualName(e.target.value)
//          }}/> 
//          </Inputdata> 
//          </InputHolder>)
//          :null
//            }

//           {
//             email ? 
                 
//            (
           
//             <InputHolder>
//                 <Text>{ email1}</Text>
//             <Inputdata>
//             <Input  placeholder = {`${emailPlace}`}
//              value={actualEmail} 
//              onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
//               setActualEmail(e.target.value)
//              }}  />
//             </Inputdata>  
//             </InputHolder>
//            ):null

//           }
               
//            {
//             password ?
//            (
           
//             <InputHolder>
//                 <Text>{password1}</Text>
//             <Inputdata>
//             <Input  placeholder = {`${passwordPlace}`} 
//              value={actualPassword} 
//              onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
//               setActualPassword(e.target.value)
//              }}/>
//             </Inputdata>
//             </InputHolder>
//            ) :null
//            }

               
//           {
//             confirm ?
//             (
                 
//             <InputHolder>
//             <Text>{confirm1}</Text>
//         <Inputdata>
//         <Input  placeholder = {`${confirmPlace}`} 
//           value={actualConfirm} 
//           onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
//            setActualConfirm(e.target.value)
//           }} />
//         </Inputdata>               
//         </InputHolder> 
//             ) : null
//           }
//         </Main>
//     </Container>
//   )
// }

// export default input

// const Input = styled.input`
// outline: none;
// border: 0px;
// width: 95%;
// height: 35px;
// margin-left: 1px;


// ::placeholder{
//     padding-left: 10px;
//     color: blue;
//     font-size: 12px;
// }
// `;
// const Inputdata = styled.div``;

// const Text = styled.div`
// position: absolute;
// top: -7px;
// font-size: 12px;
// font-weight: 700px;
// left: 10px;
// background-color: white;
// padding: 0 3px;
// color: #0a4887;
// line-height: 1;
// `;

// const InputHolder = styled.div`
// width: 300px;
// height: 40px;
// border: 1px solid #0a4887;
// border-radius: 3px;
// position: relative;
// margin: 8px 0;

// `;
// const Main = styled.div``;
// const Container = styled.div``;

import React from 'react'

const InputProps = () => {
  return (
    <div>InputProps</div>
  )
}

export default InputProps