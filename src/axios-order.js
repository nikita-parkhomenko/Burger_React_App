import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://console.firebase.google.com/project/my-burger-react-86592/database/firestore/data/'
})

export default instance;