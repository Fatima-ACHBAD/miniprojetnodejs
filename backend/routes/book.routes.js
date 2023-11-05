const express=require("express")
const router=express.Router()
const catalController=require("../controllers/catalogue.controller")


router.get("/",catalController.getBooks)

router.post("/",catalController.addBook)

router.put("/:id",catalController.updateBook)

router.get("/:id",catalController.getBook)

router.delete("/:id",catalController.deleteBook)

module.exports=router






