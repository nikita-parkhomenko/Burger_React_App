import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-55968.firebaseio.com/'
})

export default instance;