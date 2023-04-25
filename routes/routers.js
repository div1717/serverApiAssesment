const express=require('express');
const router=express.Router();
const {task1,task2,task3,task4,task5}=require('../controllers/controllers.js')
router.get('/task1',task1);
router.get('/task2',task2);
router.get('/task3',task3);
router.get('/task4',task4);
router.get('/task5',task5);

module.exports=router;