const User = require('../models/user');
const bcrypt = require('bcryptjs');
exports.register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json({
            status: 'success',
            data:  {user} 
        })
    } catch (error) {
        next(error);
    }
}
exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ account: req.body.account });
        if (!user) { 
            const err = new Error('Sai tài khoản hoặc mật khẩu.');
            err.statusCode = 400;
            return next(err);
        }
        else {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.status(200).json({
                    status: 'success',
                    data: { user }
                })
            };
        }
    } catch (error) {
        res.json(error);
    }
}