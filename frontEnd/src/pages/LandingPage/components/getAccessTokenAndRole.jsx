import { axiosFetchToken } from "../../../components/api/axios";


const getAccessTokenAndRole = async() => {
    
    try {
        const response = await axiosFetchToken.get();
        const { accessToken, role } = response.data;
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('role', role)
    } catch (err) {
        console.error(err);
        return null
    }
}


export { getAccessTokenAndRole }