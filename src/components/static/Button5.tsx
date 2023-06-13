import React from 'react'
import styled from 'styled-components'
// import { iButton5 } from '../../Utils/Interfaces'
import img1 from "../../assets/google-icon.svg"
import { iButton5 } from '../../Utils/Interfaces'

const Button5:React.FC<iButton5>= ({but,pic,text,bg,c}) => {
  return (
    <div>
      {
        but?<Buts bg={`${bg}`}>
        <Pics src={pic} />
         <T  c={`${c}`}>{text}</T>
         </Buts>: null
      }  
    </div>
  )
}

export default Button5

const Pics = styled.img`
width: 20px;
height: 20px;
margin-right: 5px;
`

const T = styled.div<{c:string}>`
color:${({c})=>c};
`

const Buts = styled.div<{bg: string}>`
width: 150px;
height: 45px;
background-color:${({bg})=>bg};
border: 1px solid gray;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 15px;
margin-top: 40px;
margin-right: 10px;
transition: all 300ms ease-in-out;

:hover{
  cursor: pointer;
}
`