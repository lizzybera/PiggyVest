import React, {createContext, PropsWithChildren,useState} from 'react'
import { iGlobal } from '../Utils/Interfaces'



export const GlobalContext = createContext({} as iGlobal)

const GlobalProvider:React.FC<PropsWithChildren> = ({children}) => {

    const [actualName , setActualName]= useState<string>("")
    const [actualPassword , setActualPassword]= useState<string>("")
    const [actualEmail , setActualEmail]= useState<string>("")
    const [actualConfirm , setActualConfirm]= useState<string>("")
  return (
    <GlobalContext.Provider value ={{actualName, setActualName,
    actualPassword, setActualPassword,
    actualEmail, setActualEmail,
    actualConfirm, setActualConfirm}}
    >
        {children}</GlobalContext.Provider>
  )
}

export default GlobalProvider