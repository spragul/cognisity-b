import express from "express"
import { getAllsite, sitecreate, sitedelete } from "../Controller/sitecontroll.js";
const router=express.Router();

router.post('/create',sitecreate);
router.get('/',getAllsite);
router.delete('/delete/:id',sitedelete);


export default router