import { database } from "../Database/database.js";
import { verifyToken } from "./creatToken.js";


const privateKey = process.env.KEY;
export const validateToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  const userLogin = await verifyToken(privateKey, token);
  // console.log(user);

  const result = await database.user().findOne({ username: userLogin.username });
  if (result) {
    return next();
  } else {
    throw new Error( "Invalid token" );
  }
};
