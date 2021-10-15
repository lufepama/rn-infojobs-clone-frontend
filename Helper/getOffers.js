import { API } from '../backend'

export const getOffers = (token) => {
    return fetch(`${API}/api/joboffer/get-offers/`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
    })
        .then((res) => {
            return res.json()
        })
        .catch((err) => { console.log('err', err) })
}