import express from "express"
import { createuser, deleteuser, forgotpassword, getAllUser, login, oneUser, resetpassword } from "../Controller/usercontroll.js";
import { adminAuthentication, validate } from "../Authentication/auth.js";
const router=express.Router();

router.post('/signup',createuser);
router.get('/',adminAuthentication,getAllUser);
router.get('/:id',validate,oneUser);
router.post('/login',login);
router.delete('/delete/:id',adminAuthentication,deleteuser);
router.post('/forgotpassword',forgotpassword)
router.put('/reset/:id/:token',resetpassword);


export default router