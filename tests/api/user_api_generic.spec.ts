import { test, expect } from '../../src/fixtures/apiFixture'

let TOKEN = process.env.API_TOKEN
let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` }


async function createUser(apiHelper: any) {
    let userObj = {
        "name": "Jagmeet Guneta",
        "email": `automation_${Date.now()}@open.com`,
        "gender": "female",
        "status": "active"
    }
    let response = await apiHelper.post('/public/v2/users', userObj, AUTH_HEADER)
    return response.body
}

test('post and get call', async ({ apiHelper }) => {
    let response = await createUser(apiHelper)
    let userId = await response.id
    console.log(userId)

    let responseGet = await apiHelper.get(`/public/v2/users/${userId}`, AUTH_HEADER)
    expect(userId).toBe(responseGet.body.id)
})

test('post and put call', async ({ apiHelper }) => {
    let response = await createUser(apiHelper)
    let userId = await response.id
    console.log(userId)

    let updateUser = {
        "name": "Jagmeet New",
        "email": `automation_${Date.now()}@open.com`,
        "gender": "female",
        "status": "inactive"
    }

    let responseGet = await apiHelper.put(`/public/v2/users/${userId}`, updateUser, AUTH_HEADER)
    expect(userId).toBe(responseGet.body.id)
    expect(updateUser.name).toBe(responseGet.body.name)
})

test('post and delete call', async ({ apiHelper }) => {
    let response = await createUser(apiHelper)
    let userId = await response.id
    console.log(userId)

    let responseGet = await apiHelper.delete(`/public/v2/users/${userId}`, AUTH_HEADER)
    expect(responseGet.status).toBe(200)

    let responseGet1 = await apiHelper.get(`/public/v2/users/${userId}`, AUTH_HEADER)
    

})