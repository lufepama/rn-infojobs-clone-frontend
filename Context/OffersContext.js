import React, { useState } from 'react'

const Context = React.createContext({})

export const OffersProvider = ({ children }) => {

    const [offerList, setOfferList] = useState([])

    return (
        <Context.Provider value={{ offerList, setOfferList }} >
            {children}
        </Context.Provider>
    )
}

export default Context