import axios from "axios"
import { axiosFetchItems } from "../../../components/api/axios"


export const getItemData = async() =>{
    //WILL change to post tinesting lang kung maayos pagkakafetch ng data
    try{
        const response = await axiosFetchItems.get()
        return response.data.items
    }
    catch(err){
        console.log(err)
        //ibalik sila sa dashboard pag null
        return null
    }
}