import React, { useState } from 'react'

const Context = React.createContext({})

export const UserRegistrationProvider = ({ children }) => {

    const [registerInformation, setRegisterInformation] = useState({})

    return (
        <Context.Provider value={{ registerInformation, setRegisterInformation }} >
            {children}
        </Context.Provider>
    )
}

export default Context