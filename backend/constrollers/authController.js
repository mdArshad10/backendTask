import User from "../models/user.js" 
import {asyncHandler} from '../middlewares/asyncHandler.js';
// @Method: POST  (for )
// @Routes: /login
// @access : public 
export const authController = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    if (!user.verifyPassword(password)) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    req.session.regenerate(() => {
      req.session.user = user;
      res.status(200).json({ user });
    });
});
