import React, { useContext, useEffect, useState } from 'react'
import UserCredentialsContext from '../Context/UserInformationContext'
import { getCredentials } from '../Helper/index'

export const useUserInfo = () => {

    const { userInfo, token, isUserLogged, setUserInfo, setToken, setIsUserLogged } = useContext(UserCredentialsContext)

    useEffect(() => {

        if (!token) {
            getCredentials()
                .then((token) => {
                    setToken(token)
                })
        }

    }, [token])

    return { userInfo, token, isUserLogged, setUserInfo, setToken, setIsUserLogged }

}