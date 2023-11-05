const express=require("express")
const router=express.Router()
const catalController=require("../controllers/catalogue.controller")


router.get("/",catalController.getCategories)

router.post("/",catalController.addCategory)

router.route("/:id").delete(catalController.deleteCategory)

module.exports=router






