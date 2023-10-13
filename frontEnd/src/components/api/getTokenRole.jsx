import App from "../../App";
import { axiosFetchToken } from "./axios";
import { useEffect, createContext, useState } from "react";

const AccessTokenContext = createContext(null);
const RoleContext = createContext(null);

const ContextProvider = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true)

  const getAccessToken = async () => {
    try {
      const response = await axiosFetchToken.get();
      const { accessToken, role } = response.data;
      setAccessToken(JSON.stringify(accessToken));
      setRole(role);
    } catch (err) {
      console.error(err);
      return null
    }
  }

  useEffect(() => {
    getAccessToken().finally(()=>{setLoading(false)});
  }, [loading]);
  
  return (
    <AccessTokenContext.Provider value={accessToken}>
      <RoleContext.Provider value={role}>
        <App/>
      </RoleContext.Provider>
    </AccessTokenContext.Provider>
  );
}

export { ContextProvider, AccessTokenContext, RoleContext };