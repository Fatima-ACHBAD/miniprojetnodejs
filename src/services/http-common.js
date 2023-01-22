import axios from "axios";  
const http= axios.create({
    baseURL:'http://localhost:3034',
    headers:{"content-type":"application/json"}
})
export default http