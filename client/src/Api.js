
const axios = require('axios')

const API_URL = 'http://localhost:8080'

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export const getAllTarefas = () => {
    return instance.get('/tarefas')
}