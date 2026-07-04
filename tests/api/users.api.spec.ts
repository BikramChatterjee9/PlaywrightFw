// import { test, expect } from '@playwright/test'

// let AUTH_TOKEN = { Authorization: 'Bearer 1f186e202e6e88b1f72d20ebae2334da02f7d6305255632af571aac18eb1da7a' }

// test('get user test', async ({ request }) => {

//     let response = await request.get('https://gorest.co.in/public/v2/users/', {
//         headers: AUTH_TOKEN
//     })

//     // console.log(response)

//     let jsonBody = await response.json()

//     console.log(jsonBody)

//     console.log(response.status())

//     console.log(response.statusText())

//     expect(response.status()).toBe(200)

// })

// test('create user test', async ({ request }) => {

//     let userObj = {
//         "name": "Jagmeet Guneta",
//         "email": `automation_${Date.now()}@open.com`,
//         "gender": "female",
//         "status": "active"
//     }

//     let response = await request.post('https://gorest.co.in/public/v2/users', {
//         headers: AUTH_TOKEN,
//         data:userObj
//     })

//     let jsonBody = await response.json()
//     console.log(jsonBody)

//     console.log(response.status())
//     console.log(response.statusText())

// })

// test('update user test', async ({ request }) => {

//     let userObj = {
//         "name": "Jagmeet Guneta 1",
//         "email": `automation_${Date.now()}@open.com`,
//         "gender": "female",
//         "status": "inactive"
//     }

//     let response = await request.put('https://gorest.co.in/public/v2/users/8531894', {
//         headers: AUTH_TOKEN,
//         data:userObj
//     })

//     let jsonBody = await response.json()
//     console.log(jsonBody)

//     console.log(response.status())
//     console.log(response.statusText())

// })

// test('delete user test', async ({ request }) => {

//     let response = await request.delete('https://gorest.co.in/public/v2/users/8531297', {
//         headers: AUTH_TOKEN,
        
//     })

//     console.log(response.status())
//     console.log(response.statusText())

// })