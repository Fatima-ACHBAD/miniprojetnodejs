const catalservice=require("../services/catalogue.services")


 const getBooks=async (req,res)=>{ 
      
  try {
    const result=await catalservice.getAllBooks()
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
  const getBook=async (req,res)=>{
    try {
      const result=await catalservice.getBookById(req.params.id)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json(error)
    }
  }

    const deleteBook=async (req,res)=>{
      
    try {
      await catalservice.deleteBookById(req.params.id)
      res.status(200).json("Livre supprimé")
    } catch (error) {
      res.status(500).json(error)
    }
}
const addBook=async (req,res)=>{
  try {
    await catalservice.createBook(req.body)
    res.status(201).json("Livre ajouté")
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
const updateBook=async (req,res)=>{
  try {
    await catalservice.updateBook(req.body)
    res.status(200).json("Livre modifié")
  } catch (error) {
    res.status(500).json(error)
  }
}
const addCategory=async (req,res)=>{
    try {
      await catalservice.createCategory(req.body)
      res.status(201).json("Catégorie créer")
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }
  const getCategories=async (req,res)=>{
    try {
      const result=await catalservice.getAllCategories()
      res.status(201).json(result)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }
  const deleteCategory=async (req,res)=>{
    try {
      await catalservice.deleteCategoryById(req.params.id)
      res.status(201).json("Catégorie supprimée")
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }
module.exports={getBooks,getBook,deleteBook,updateBook,addBook,deleteCategory,getCategories,addCategory}

