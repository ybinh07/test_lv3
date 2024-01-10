import { database } from "../Database/database.js";
import { verifyToken } from "../Service/verify.js";

const privateKey = process.env.KEY;
export const validateToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  const user = await verifyToken(privateKey, token);
  // console.log(user);

  const result = await database.user().findOne({ username: user.username });
  if (result) {
    return next();
  } else {
    throw new Error("Access token is wrong");
  }
};
