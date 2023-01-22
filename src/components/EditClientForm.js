import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import clientservice from "../services/clientService"

function EditClientForm(){
    const {id}=useParams()
    const [nom,setNom]=useState("")
    const [prenom,setPreNom]=useState("")
    const [age,setAge]=useState("")
    const navigate= useNavigate()
    useEffect(()=>{
        getClient()
    },[])
    async function getClient(){
        const rep=await clientservice.getclientbyId(id)
        setNom(rep.data.name)
        setPreNom(rep.data.prenom)
        setAge(rep.data.age)


    }
    async function updateclient(e){
        e.preventDefault()
        const c={"_id":id,"name":nom,"prenom":prenom,"age":age}
        console.log(c)
        await clientservice.updateclient(c)
        navigate("/clients")
    }
    return (
    <><h1>Formulaire pour modifier un client {id}</h1>
     <div  className="container ">
    <form onSubmit={(e)=>updateclient(e)}>
            <label className="form-label" htmlFor="nom">NOM</label>
            <input className="form-control" type="text" value={nom} id="nom"  onChange={(e) => setNom(e.target.value)}/><br/>
            <label className="form-label" htmlFor="prenom">PRENOM</label>
            <input className="form-control" type="text" value={prenom} id="prenom"  onChange={(e) => setPreNom(e.target.value)}/><br/>
            <label className="form-label" htmlFor="age">AGE</label>
            <input className="form-control" type="text" value={age} id="age"  onChange={(e) => setAge(e.target.value)}/><br/>
            <button  className="btn btn-primary mg-3" type="submit">SAVE</button>
            
           
        </form></div></>)
          
}
export default EditClientForm
           // <input className="form-control" type="Submit" value={"SAVE"}/>
