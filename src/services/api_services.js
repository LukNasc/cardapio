const api = 'http://localhost:3002/api/react-produtos'

export const ApiService = {
    get(endpoint) {
        return fetch(`${api}${endpoint}`)
            .then(response => response.json());
    },
    post(endpoint, body) {
        return fetch(`${api}${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(body)
        })
            .then(response => response.json());
    },
    delete(endpoint, id) {
        return fetch(`${api}${endpoint}?id=${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json());
    },

}