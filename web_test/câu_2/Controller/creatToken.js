import bcrypt from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();
const key = process.env.PRIVATE_KEY
export const createLoginAccessToken = (user) => {
console.log('user',user)
  return new Promise((resolve, reject) => {
    
    jwt.sign(
      { username: user.user_name, password: user.pass_word },
      key,
      { expiresIn: "3h" },
      (err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      }
    );
  });
};
export const loginAccess = async (req, res) => {
 
  const userInfo = {
    user_name: req.body.username,
    pass_word: req.body.password,
  };
  console.log('user',userInfo)
  const token = await createLoginAccessToken(userInfo);
  return res.json({ token });
};


export const verifyToken = (key, token)=>{
  return new Promise((resolve,reject)=>{
    jwt.verify(token,key,{expiresIn:"1h"},(err,decoded)=>{
      if(err){
    const errorMessage = err.message || "Invalid token";
    reject(errorMessage);
      }
      resolve(decoded);
    });
    
  })
}