import bcrypt from 'bcrypt'
import UserRepository from "./users.repository.js";
import UserModel from "./users.model.js";
export default class UserController{
    static async addUser(req,res){
       const result=await UserRepository.addUser(req.body);
       if(!result)
        return res.render('error',{content:'A bad request is sent to register the user'})
    return res.redirect('/login');
    }
    static getLogin(req,res){
        return res.render('login',{layout:'usr-layout'});// the usr-layout
    }
    static getRegister(req,res){
        return res.render('register',{layout:'usr-layout'});// the usr-layout
    }
    static async checkUser(req,res,next){
        const {email}=req.body;
        const result=await UserModel.checkUser(email);
        if(!result)
            return res.redirect('/')
        return res.redirect('/list')
    }
    static async signin(req,res){
            const{email,pass}=req.body;
            const user=await UserModel.checkUser(email);
            bcrypt.compare(pass,user[0].pass,function(err,result){
                if(!result)
                    return res.render('/')
                return res.redirect('/list');
            });
    }
 
    static async updateUser(req,res){
        const {id,name,email,pass,phone}=req.body;
        const result=await UserModel.update(id,name,email,pass,phone);
        if(!result)
            return res.render('error',{content:'the updation of the user is failed'})
        return res.redirect('/');
    }

}