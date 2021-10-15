import React from 'react'
import { API } from '../backend'

export const signup = (userData) => {

    return fetch(`${API}/api/user/signup/`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
        .then((res) => {
            return res.json()
        })
        .catch((err) => { console.log('err', err) })
}