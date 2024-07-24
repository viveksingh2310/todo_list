import { MongoClient } from "mongodb"
const dbName='todo'
let client
async function connect(){
client=new MongoClient(process.env.DB_URL)
await client.connect()
console.log('connected to the databse succesfully')
}
async function getDB(){
    console.log('sdffs')
    const result=await client.db(dbName)
    return result
}
export {connect,getDB}