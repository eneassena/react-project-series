import axios from "axios";

const uriApi = `http://127.0.0.1:8080/api/v1`;

const instance = axios.create({
    baseURL: uriApi,
    timeout: 1000,
});

 
const ClientRest = {
    EndPoint: 'products',
    get(data){
        if (data && data.id)
            return instance.get(`${uriApi}/${this.EndPoint}/${data.id}`)
        return instance.get(`${uriApi}/${this.EndPoint}`)
    },
    post(data) {
        return instance.post(`${uriApi}/${this.EndPoint}`, data)
    },
    put(data) {
        let id = Number(data.id)
        return instance.put(`${uriApi}/${this.EndPoint}/${id}`, data)
    },
    delete(data) {
        let id = Number(data.id)
        return instance.delete(`${uriApi}/${this.EndPoint}/${id}`)
    },
}

export default ClientRest;
