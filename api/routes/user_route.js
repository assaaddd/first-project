import express from 'express';

import {
    getUser,
}from '../controllers/user_controller.js'

const router = express.Router();

router.get('/test' , getUser);


export default router;