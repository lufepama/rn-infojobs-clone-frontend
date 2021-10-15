import React, { useContext, useEffect } from 'react'
import OffersContext from '../Context/OffersContext'
import { getOffers } from '../Helper/getOffers'
import { useUserInfo } from './useUserInfo'


export const useOffers = () => {

    const { offerList, setOfferList } = useContext(OffersContext)
    const { userInfo } = useUserInfo();

    const loadOffers = async (token, setOfferList) => {

        const response = await getOffers(token)
        const { success, data } = response

        if (success) {
            setOfferList(data)
        }

    }

    useEffect(() => {
        loadOffers(userInfo.token, setOfferList)
    }, [userInfo])

    return { offerList, setOfferList }

}


