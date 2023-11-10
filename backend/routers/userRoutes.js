import express from 'express';

import { authController } from '../constrollers/authController.js';

const router = express.Router()

router.route('/login').post(authController)

export default router;