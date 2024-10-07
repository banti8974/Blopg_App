const express =require ("express");
const router=express.Router();


//Import Controler

const {dummyLink}=require("../controllers/likeController");






//maping  create

router.get("dummyroute",dummyLink)



//export
module.exports=router;