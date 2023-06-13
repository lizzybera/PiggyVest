import React from 'react'
import styled from 'styled-components'
import { iButton } from '../../Utils/Interfaces'

const Button2: React.FC<iButton> = ({ onClick, c, bg, tittle}) => {
  return (
    <div>
        <Container
        
        onClick={onClick}
        >

            
            <Main
               c = {`${c}`}
               bg = {`${bg}`}
               >
           

              {tittle}
            </Main>
        </Container>
    </div>
  )
}

export default Button2


const Main = styled.div<{
    bg: string;
    c:string
    }>`

color: ${({c}) => c};
background-color: ${({bg}) => bg};;
padding: 9px 30px;
border-radius: 5px;
transition: all 350ms;
text-transform: uppercase;
font-weight: 700px;
font-size: 12px;


:hover{
    cursor: pointer;
    transform: translate(0, -3px);
}
`;

const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`;
