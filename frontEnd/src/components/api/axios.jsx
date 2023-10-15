import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

const baseUrl = `${import.meta.env.VITE_API_URL}`;
const accessToken = localStorage.getItem('accessToken')

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

axiosFetchItems.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            return axiosFetchRefreshToken.post('/auth/refreshToken')
                .then(response => {
                    console.log(response)
                    const newAccessToken = response.data.accessToken;
                    localStorage.setItem('accessToken', newAccessToken);
                    originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosFetchItems(originalRequest);
                });
        }
        return Promise.reject(error);
    }
);
//TODO: NEED TO FIX THE INTERCEPTOR AFTER REREQUEST
const axiosTry = axios.create({
    baseURL: `${baseUrl}/auth/refreshToken`,
});

export { axiosFetchToken, axiosFetchItems, axiosTry };