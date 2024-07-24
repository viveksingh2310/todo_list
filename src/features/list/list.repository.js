import { ObjectId } from "mongodb";
import { getDB } from "../../../config/mongodb.js";
import ListModel from "./list.model.js";
export default class ListRepository{
    static async get(){
        const db=await getDB();
        const result= await db.collection('list').find().toArray();
        return result
    }
    static async add(title,note,date,isImportant,tags){
        const newItem=new ListModel(title,note,date,isImportant,tags);
        const db=await getDB();
        const result=await db.collection('list').insertOne(newItem);
        return result;
    }
    static async remove(id){
        const db=await getDB();
        const result= await db.collection('list').findOneAndDelete({_id:new ObjectId(id)});
        return result;
    }
    static async update(id,content){
        const {title,note,date,isImportant,tags}=content;
       const db=await getDB();
        const result=await db.collection('list').findOneAndUpdate({_id:new ObjectId(id)},{$set:{title,note,date,isImportant,tags}});
        return result;
    }    
    static async addToImportant(id){
        const db=await getDB();
        const result=await db.collection('list').findOne({_id:new ObjectId(id)});
       const rev=!(result.isImportant);
        // const isImportantNot=!result.isImportant;
        // result.isImportant=isImportantNot;
        // const {title,note,date,isImportant,tags}=result;
        const updatedOne=await db.collection('list').findOneAndUpdate({_id:new ObjectId(id)},{$set:{isImportant:rev}},{returnOriginal:true})
        return updatedOne;
    }
}
