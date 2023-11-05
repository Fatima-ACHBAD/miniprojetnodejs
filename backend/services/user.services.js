const User=require("../models/User")
const bcrypt=require("bcrypt")

const  createUser=async(u)=>{
    const salt= await bcrypt.genSalt();//chaine aléatoire pour compliquer le mdp pour le endre irreverssible 
    u.password=await bcrypt.hash(u.password,salt)//on prend le mdp et on ajoute le hashage eet on le restrock dans mdp 
    return await User.create(u);
}
const  getAllUsers=async()=>{
    return await User.find();
}

module.exports={createUser,getAllUsers}

