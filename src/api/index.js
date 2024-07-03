import axios from "axios";

const API = axios.create({ baseURL: "https://expense-tracker-springboot-production.up.railway.app"})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post('/auth/login', authData)
export const signUp = (authData) => API.post('/auth/signup', authData)