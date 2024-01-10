import { MongoClient } from "mongodb";
import { config } from "dotenv";
import process from "process";
config();

const password = process.env.DB_PASS;
const username = process.env.DB_USERNAME
const uri = `mongodb+srv://${username}:${password}@sessionmongo.tpsqgdh.mongodb.net/`;

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

export const database = new DataBaseService();