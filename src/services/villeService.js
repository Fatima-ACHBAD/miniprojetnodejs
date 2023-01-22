import http from "./http-common"
async function getAllVilles(){
    return await http.get("/villes")
}

async function addVille(c){
    return await http.post(`/villes`,c)
}
const villeService={getAllVilles,addVille}
export default villeService 