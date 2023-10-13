import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

const baseUrl = `${import.meta.env.VITE_API_URL}`;
const accessToken = null

//get
const axiosFetchToken = axios.create({
    baseURL: `${baseUrl}/auth/login/success`
});

//post kasi eto na mga need mo pakita token e
const axiosFetchItems = axios.create({
    baseURL: `${baseUrl}/prot/data`,
    headers:{
        'Authorization': `Bearer ${accessToken}`
    }
});

export { axiosFetchToken, axiosFetchItems };