const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        description:{type:String,required:true},
        isbn:{type:String,required:true},
        author:{type:String,required:true},
        editor:{type:String,required:true},
        date_publication:{type:Date,default:Date.now},
        image:{type:String},
        category:{
            type:mongoose.Types.ObjectId,
            ref:"Category"
        }
    }
)
const Book=mongoose.model("Book",bookSchema)
module.exports=Book