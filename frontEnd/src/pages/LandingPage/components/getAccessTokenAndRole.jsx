import { axiosFetchToken } from "../../../components/api/axios";
import { useState, useEffect } from "react";

const getAccessTokenAndRole = () => {
    
    const [accessToken, setAccessToken] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true)

    const getData = async()=>{
        try {
            const response = await axiosFetchToken.get();
            const { accessToken, role } = response.data;
            setAccessToken(JSON.stringify(accessToken));
            setRole(JSON.stringify(role));
        } catch (err) {
            console.error(err);
            return null
        }
    }

    useEffect(() => {
        getData().finally(()=>{setLoading(false)})
    }, []);
    if(loading === false){
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('role', role)
    }
}

export { getAccessTokenAndRole }