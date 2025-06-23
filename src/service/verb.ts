
import axiosClient from "./instance"



export async function getRequest(URL:string,params:object){
    const responce= await axiosClient.get(URL,{params:params})
    return responce
}


export async function postRequest(URL:string,payload:object){
    const responce= await axiosClient.post(URL,payload)
    return responce
}


export async function putRequest(URL:string,payload:object){
    const responce= await axiosClient.put(URL,payload)
    return responce
}


export async function patchRequest(URL:string,payload:object){
    const responce= await axiosClient.patch(URL,payload)
    return responce
}

export async function deleteRequest(URL:string,payload:object){
    const responce= await axiosClient.delete(URL,payload)
    return responce
}