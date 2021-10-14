import React, { useState } from 'react'

const Context = React.createContext({})

export const UserInformationProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({})
    const [token, setToken] = useState('')
    const [isUserLogged, setIsUserLogged] = useState(false)

    return (
        <Context.Provider value={{ userInfo, token, isUserLogged, setUserInfo, setToken, setIsUserLogged }} >
            {children}
        </Context.Provider>
    )
}

export default Context