import http from "./http-common"
async function getAllclient(){
    return await http.get("/clients")
}
async function getclientbyId(id){
    return await http.get(`/clients/${id}`)
}
async function deleteclientbyId(id){
    return await http.delete(`/clients/${id}`)
}
async function updateclient(client){
    return await http.put(`/clients/${client._id}`,client)
}
async function AddClient(client){
    return await http.post(`/clients`,client)
}
const clientservice={getAllclient,getclientbyId,deleteclientbyId,AddClient,updateclient}
export default clientservice 