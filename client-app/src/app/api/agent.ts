import axios, { AxiosResponse } from 'axios';
import { Message } from '../models/message';

//sets a default url for the agent
axios.defaults.baseURL = 'http://localhost:5000/api';

//gets the response data to a variable called response body
const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),

}

//makes a get request 
const Messages = {
    list: () => requests.get<Message[]>('/messages'),
    create: (message: Message) => axios.post('/messages', message)

}
const agent = {
    Messages
}

export default agent;
