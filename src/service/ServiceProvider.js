import router from "../router/index"
import { RegisterModel } from "../model/RegisterModel"
const urlApiLogin = `https://90h9amptse.execute-api.us-east-1.amazonaws.com/auth/login`;
const urlApiUser = `https://90h9amptse.execute-api.us-east-1.amazonaws.com/user`;

export const loginUser = async(rq) => {
    const response = await fetch(urlApiLogin, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(rq)
    });
    const data = await response.json()
    if (await response.status == 200) {
        localStorage.setItem('dataUser', JSON.stringify(data));
        router.push({ path: '/login-successful' })
    } else
        return false;

}

export const validationCI = async(rq) => {
    const response = await fetch(urlApiLogin, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(rq)
    });
    const { access_token } = await response.json()
    if (await response.status == 200) {
        localStorage.setItem('access_token', access_token);
    } else
        return false;
}

export const registerUsers = async(rq) => {
    const request = RegisterModel
    request.username = rq;
    request.password = 'T3steR0o*';
    const token = localStorage.getItem('access_token')
    const header = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    return await fetch(urlApiUser, {
        method: 'POST',
        headers: header,
        body: JSON.stringify(request)
    });
    // const data = await response.json()
    // console.log(data, response.status)
    // if (await response.status === 200) {
    //     return true
    // } else {
    //     return false;
    // }
}