import React from 'react'
import { API } from '../backend'

export const sendVerificationCode = async (email) => {

    try {
        const userData = {
            "email": email,
        }
        const res = await fetch(`${API}/api/emailconfirmation/create-email-code/`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        return await res.json()
    } catch (err) {
        console.log('err', err)
    }
}