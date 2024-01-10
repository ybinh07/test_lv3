  import jwt from "jsonwebtoken";


    export const verifyToken = (privateKey,token)=>{
      return new Promise((resolve,reject)=>{
        jwt.verify(token,privateKey,{maxAge:"1h"},(err,decoded)=>{
          if(err){
            reject(err.message)
          }
          resolve(decoded);
          
        });
        
      })
    }