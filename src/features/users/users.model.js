import UserRepository from "./users.repository.js"
import bcrypt from 'bcrypt'
export default class UserModel{
    constructor(name,email,pass,phone){
        this.name=name
        this.email=email
        this.pass=pass
        this.phone=phone
    }
    static async addUser(userData){
        const {name,email,pass,phone}=userData;
        let newUser;
       await bcrypt.hash(pass,8).then(function(hash){
        newUser=new UserModel(name,email,hash,phone);
       })
        return newUser;
    }
    static async checkUser(email){
        const result=await UserRepository.findUser(email);
        if(!result)
            return;
        return result;
    }
    static async update(id,name,email,pass,phone){
        const result=await UserRepository.updateUser(id,name,email,pass,phone);
        if(!result)
            return
        return result;
    }
}