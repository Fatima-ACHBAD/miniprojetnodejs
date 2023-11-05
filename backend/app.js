const express=require("express")
const mongoose=require("mongoose")
const app=express()//pour instancier une constante de type express 
const cors=require("cors")
app.use(cors())


const bookRoutes=require("./routes/book.routes")
const catRoutes=require("./routes/category.routes")
const userRoutes=require("./routes/user.routes")

// foncction midelware pour interpreter les données envoyer sous forme ce format recue depuis l'extérieur 
app.use(express.json())//pour interpreter les données envoyer par le format urlencoded
app.use("/books",bookRoutes)
app.use("/categories",catRoutes)
app.use("/users",userRoutes)


require("dotenv").config()
    
    mongoose.connect(process.env.MONGO_URL)
    .then(console.log("connection effectuée"))
    
    app.listen(3034,function(){
        console.log("server is running")
    })



