import React from 'react'
import styled from 'styled-components'
import { iButton4 } from '../../Utils/Interfaces'



const Button4: React.FC<iButton4> = ({buts, pics, text}) => {
  return (
    <div>
        {
            buts? <Buts>
            <Pics src={pics} />
            <T>{text}</T>
            </Buts> : null
        }
    </div>
  )
}

export default Button4

const Pics = styled.img`
width: 20px;
height: 20px;
margin-right: 5px;
`

const T = styled.div``

const Buts = styled.div`
width: 150px;
height: 45px;
background-color: white;
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