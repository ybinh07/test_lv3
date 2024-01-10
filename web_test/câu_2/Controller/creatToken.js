import bcrypt from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();
const privateKey = process.env.KEY;
export const createLoginAccessToken = (user, privateKey) => {
  // console.log(user);
  return new Promise((resolve, reject) => {
    jwt.sign(
      { username: user.username, password: user.password },
      privateKey,
      { expiresIn: "3h" },
      (err, token) => {
        if (err) {
          reject(err.message);
        }
        resolve(token);
        loginAccess;
      }
    );
  });
};
export const loginAccess = async (req, res) => {
  const encrypt = {
    username: req.body.username,
    password: req.body.password,
  };

  const token = await createTokenLogin(encrypt, privateKey);
  return res.json({ token });
};
