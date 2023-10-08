import { useState, useEffect } from "react"
import axios from "axios"

const useRefreshToken = () => {

    const [authAxios, setAuthAxios] = useState(axios);

  useEffect(() => {
    const refreshToken = async () => {
      try {
        // Make a request to your backend's /refresh-token endpoint to get a new access token 
        const response = await axios.post('/refreshToken', {withCredentials: true});
        const newAccessToken = response.data.accessToken;
        // Update the Authorization header with the new access token
        authAxios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      } catch (refreshError) {
        // Handle refresh token failure, e.g., log out the user
        // You can also redirect the user to the login page
        console.error(`Failed to refresh token: ${refreshError}`);
      }
    };

    // Request interceptor: Add the Authorization header with the access token 
    authAxios.interceptors.request.use(
      (config) => {
        // Access token, might be stored in local storage
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor: Handle token refresh on 401 Unauthorized responses 
    authAxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && error.response.status === 401) {
          // Unauthorized, attempt to refresh token here 
          await refreshToken();
          // Retry the failed request after refreshing the token 
          return authAxios.request(error.config);
        }
        return Promise.reject(error);
      }
    );

    setAuthAxios(authAxios);
    
  }, []); // Ensure this effect runs only once
};
 

export default useRefreshToken