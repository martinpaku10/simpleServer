import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import newUserModel from "./SimpleSchema/user_simpleSchema.js"



const app=express()
const port=process.env.PORT||8000
dotenv.config()
app.use(cors())
app.use(express.json())
const url=process.env.DB_URL
// connect server to mongo db
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{
    console.log("Database entered successfully")
}).catch((error)=>{
    console.log(error)
})

// home route
app.get("/",(req,res)=>{
    res.send("Welcome To My API")
})

// get all users

app.get("/users",async(req,res)=>{

try {
const getUsers=await newUserModel.find({})

res.send({
    message:"All users fetch successfully from database",
    data:getUsers
})
    
} catch (error) {
    
}

})

///create a new user

app.post("/createUser",async(req,res)=>{

   try {
    const {first_name,last_name,date_of_birth,school}=req.body
    const createUser=await newUserModel.create({
        first_name,
        last_name,
        date_of_birth,
        school,
        
    })
    console.log(createUser)
    res.send({
        message:"User created successfully"
    })
   } catch (error) {
       console.log(error)
   }
})


app.listen(port,()=>{
    console.log("Server running")
})