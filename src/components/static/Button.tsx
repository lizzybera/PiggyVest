import React from 'react'
import styled from 'styled-components'
import { iButton2 } from '../../Utils/Interfaces'



const Button: React.FC<iButton2> = ({text, but}) => {
  return (
    <div>
      {
        but ? <Button2> {text}</Button2> : null
      }
      </div>
  )
}

export default Button

const Button2 = styled.div`
width: 200px;
height: 55px;
background-color: black;
color: white;
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
  background-color: blue;
}
`