import ListRepository from "./list.repository.js";
export default class ListController{
    static async get(req,res){
        const items=await ListRepository.get();
        return res.render('list',{
            items:items
        })
    }
    static async add(req,res){
        const {title}=req.body;
        const result=ListRepository.add(title);
        if(!result)
            return res.render('error',{content:'A bad Request is being requested from the server'});
         await ListController.get(req,res);// the updated items will be displayed easily
    }
    static async delete(req,res){
        const{id}=req.body;
        const result=ListRepository.remove(id);
        if(!result)
            return res.render('error',{content:"The requested deletion is not possible as there is no such to-do found"});
        await ListController.get(req,res);
    }
    static async update(req,res){
        const {id,updatedItem}=req.body;
        const result =await ListRepository.update(id,updatedItem);
        if(!result)
            return res.render('error',{content:"the updation operation could not be processed dut to wrong request"})
       await ListController.get(req,res);
    }
    static async addToImportant(req,res){
        const {id}=req.body;
        const result=await ListRepository.addToImportant(id);
        if(!result)
            return res.render('error',{content:"the updation operation could not be processed dut to wrong request"})
        await ListController.get(req,res);
    }
    static async checkImp(req,res){
        const {id}=req.body;
        const result=await ListRepository.checkImp(id);
        console.log('the element you clicked is : '+result)
         return res.send({response:result.toString()});
    }
}