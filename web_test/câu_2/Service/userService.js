
import { User } from "../Schema/userSchema.js";
import { database } from "../Database/database.js";
 class UserService{
    async register(payload){
        const result= await database.user().insertOne(new User(payload));
        return true
    }
}
export const userService= new UserService();