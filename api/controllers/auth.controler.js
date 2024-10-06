import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body; /* the reason is that we have to change the password later */
    const hashedpassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedpassword });
    try {
        await newUser.save();
        res.status(201).json("User created succesfully");
    } catch (error) {
        next(error)
    } 
};

export const signin = async(req, res , next) => {
    const {email , password} = req.body;
    try{
        const validUser = await User.findOne({email})
        if(!validUser) return next(errorHandler(404, 'User not found'))
        const validPassoword = bcryptjs.compareSync(password , validUser.password)
    if(!validPassoword) return next(errorHandler(401 , 'Invalid password'))
    } catch(error){
        next(error)
    }
}