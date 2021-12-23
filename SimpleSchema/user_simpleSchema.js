import mongoose from "mongoose"

const {Schema,model}= mongoose

const simpleSchema = Schema({
    first_name:{
        type: String,
        required: true
    }, 
    last_name:{
        type:String,
    },
    date_of_birth:{
        type:String,
        required:true
    },
    school:{
        type:String,
        required:true
    }
})

const UserModel=model("Users",simpleSchema)

export default UserModel 
// export default user_simpleSchema