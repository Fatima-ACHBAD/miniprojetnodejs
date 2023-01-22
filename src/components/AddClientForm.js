import { useEffect, useState } from "react"
import { redirect, useNavigate } from "react-router-dom"
import villeService from "../services/villeService"
import clientservice from "../services/clientService"


function AddClientForm(){
    const [nom,setNom]=useState("")
    const [prenom,setPreNom]=useState("")
    const [age,setAge]=useState("")

    const [villes,setVilles]=useState([])
    const [SelectedVille,setSelectedVille]=useState(0)
    async function getVilles(){
       // e.preventDefault()
       // const c={"name":nom,"prenom":prenom,"age":age}
        //const c={nom,prenom,age}
       const res=await villeService.getAllVilles()
       console.log(res)
       setVilles(res.data)
        
    }
    const navigate= useNavigate()
    useEffect(()=>{
        getVilles()
    },[])
    async function AddClient(e){
        e.preventDefault()
        const c={"name":nom,"prenom":prenom,"age":age,"ville":villes[setSelectedVille]}
        //const c={nom,prenom,age}
       const res=await clientservice.AddClient(c)
       console.log(res)
        navigate("/clients")
    }
    return (
        <div  className="container ">
        <form onSubmit={(e)=>AddClient(e)}>
            <label className="form-label" htmlFor="nom">NOM {nom}</label>
            <input className="form-control" type="text" id="nom"  onChange={(e) => setNom(e.target.value)}/><br/>
            <label  className="form-label" htmlFor="prenom">PRENOM</label>
            <input  className="form-control"type="text" id="prenom"  onChange={(e) => setPreNom(e.target.value)}/><br/>
            <label  className="form-label" htmlFor="age">AGE</label>
            <input  className="form-control" type="text" id="age"  onChange={(e) => setAge(e.target.value)}/><br/>
            <label  className="form-label" htmlFor="ville">VILLE</label>
            <select onChange={(e) => setSelectedVille(e.target.value)}className="form-select">
                {
                    villes.map((elem,index)=>{
                        return <option value={index} key={index}>{elem.name}</option>
                    })
                }
            </select>
            <button  className="btn btn-primary mg-3" type="submit">SAVE</button>
        </form></div>
    )
}
export default AddClientForm