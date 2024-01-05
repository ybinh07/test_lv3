import { MongoClient } from "mongodb";
import { config } from "dotenv";
import process from "process";
config();

// Replace the uri string with your connection string.
const pass = process.env.PASS;
const uri = `mongodb+srv://yenbinh237:${pass}@sessionmongo.tpsqgdh.mongodb.net/`;

class DataBaseService {
  constructor() {
     this.client = new MongoClient(uri);
    this.db=this.client.db(process.env.DATANAME)
  }
    run() {
    try {
           this.client.connect();
   
        
    } catch(error) {
     
      console.log("error",error);
    }
  }
   order(){
    return this.db.collection("Order");
  }
  user(){
    return this.db.collection("User");
  }
  inventory(){
    return this.db.collection("inventory");
  }
}

export const databaseUnit=new DataBaseService();