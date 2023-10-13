import { axiosFetchToken } from "./axios"

export const getAccessToken = async() => {
    try{
      const response = await axiosFetchToken.get()
      //todo: lagay to sa useContext and yes dalawa yan ilalagay mo 
      const token = response.data.accessToken
      const role = response.data.role
    }
    catch(err){ console.log(err)}
    return null
  }