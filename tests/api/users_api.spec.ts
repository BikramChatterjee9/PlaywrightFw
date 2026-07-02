import { test, expect } from '../../src/fixtures/apiFixture'

let TOKEN = process.env.API_TOKEN
let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` }

async function createUser(apiHelper:any) {
    let userObj = {
        "name": "Jagmeet Guneta",
        "email": `automation_${Date.now()}@open.com`,
        "gender": "female",
        "status": "active"
    }
    let response = await apiHelper.post('/public/v2/users', userObj, AUTH_HEADER)
    expect(response.status).toBe(201)
    return response.body
}

// test('create user test',async({apiHelper})=>{

//     let userResponse = await createUser(apiHelper)

//     let response = await apiHelper.get(`/public/v2/users${userResponse.id}`,AUTH_HEADER)
//     expect(response.status).toBe(200)

// })