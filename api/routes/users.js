import express from 'express';
import { addUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', addUser)

export default router;