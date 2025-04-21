import User from '../models/user_model.js';

const UserConroller = {

    allUsers: async (req, res, next) => {
        try {
            const users = await User.find();
            if (users.length === 0) {
                return res.status(404).json({ message: 'No users found' });
            }
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const fields = {
                name: req.body.name,
                email: req.body.email,
            }

            const user = await User(fields).save();

            if (!user) {
                return res.status(400).json({ message: 'Error creating user' });
            }

            res.status(200).json({
                user: user,
            });

        } catch (error) {
            next(error)
            // res.status(500).json({ message: 'Error fetching tests', error });
        }
    },

}

export default UserConroller;