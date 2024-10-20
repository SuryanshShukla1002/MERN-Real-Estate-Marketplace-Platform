import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
    res.json({
        message: 'Api route is working fine',
    });
};

export const updateUser = async (req, res, next) => {
    if (req.user.id != req.params.id) return next(errorHandler(401), "You can only update your own account");
    try {
        if (req.body.password) { // if user is trying to update hos password then we encrrpyt the pass
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar
            }
        });
    } catch (error) {
        next(error);
    }
};