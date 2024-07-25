import { getDB } from "../../../config/mongodb.js"
import UserModel from "./users.model.js"
import { ObjectId } from "mongodb"
export default class UserRepository{
    static async addUser(userData){
   const newUser=await UserModel.addUser(userData)
   const db=await getDB()
  return await db.collection('users').insertOne(newUser);
    }
    static async findUser(email){
        const db=await getDB()
        const result=await db.collection('users').find({email:email}).toArray()
        if(result.length==0)
            return
        return result
    }
    static async updateUser(id,name,email,pass,phone){
        const db=await getDB();
        const updatedUser=await db.collection('users').findOneAndUpdate({_id:new ObjectId(id)},{$set:{name,email,pass,phone}},{returnOriginal:true})
       console.log(updatedUser);
        if(!updatedUser)
            return;
        return updatedUser;
    }
}