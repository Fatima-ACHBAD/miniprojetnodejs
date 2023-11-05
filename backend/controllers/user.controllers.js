const userService=require("../services/user.services")

 const addUser=async (req,res)=>{ 
      
  try {
    await userService.createUser(req.body)
    res.status(201).json("Utulisateur ajouté")
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
  const getUser=async (req,res)=>{
    try {
      const result=await userService.getAllUsers()
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  

module.exports={addUser,getUser}

