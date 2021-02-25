
const axios = require('axios')

const API_URL = 'http://localhost:8080'

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export const getAllTarefas = async () => {
    return new Promise((resolve, reject) => {
        instance.get('/tarefas').then(result => {
            console.log(result)

            if (result.statusText === 'OK') {
                resolve(result)
            } else {
                reject({
                    error: true
                })
            }
        })
    })
}

export const udpateTask = (task) => {
    return instance.put('/tarefas', task)
}

export const createTask = async (task) => {
    return new Promise((resolve, reject) => {
        instance.post('/tarefas', task).then(result => {

            if (result) {
                resolve(result)
            } else {
                reject()
            }

        }).catch(err => {
            resolve({error: true, err})
        })
    })
}