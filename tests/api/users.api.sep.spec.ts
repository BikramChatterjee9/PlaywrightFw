import {test,expect} from '../../src/fixtures/apiFixture'

let TOKEN=process.env.API_TOKEN
let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` }
let responseId:number

test('get all users ',async({apiHelper})=>{

    let response = await apiHelper.get('/public/v2/users',AUTH_HEADER)
    expect(response.status).toBe(200)
    expect(response.body.length).toBeGreaterThan(0)

})

test('create users ',async({apiHelper})=>{

        let userObj = {
        "name": "Jagmeet Guneta",
        "email": `automation_${Date.now()}@open.com`,
        "gender": "female",
        "status": "active"
    }

    let response = await apiHelper.post('/public/v2/users',userObj,AUTH_HEADER)
    expect(response.status).toBe(201)
    expect(response.body.name).toBe(userObj.name)
    responseId = response.body.id
    console.log('user id is ',responseId)
})

test('update users ',async({apiHelper})=>{

        let userObj = {
        "name": "Jagmeet API",
        "email": `automation_${Date.now()}@open.com`,
        "gender": "female",
        "status": "inactive"
    }

    let response = await apiHelper.put(`/public/v2/users/${responseId}`,userObj,AUTH_HEADER)
    expect(response.status).toBe(200)
})
