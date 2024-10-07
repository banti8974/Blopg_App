const express = require("express");

require("dotenv").config;

const app = express();


const port=process.env.PORT || 3000;

    //middleware
    app.use(express.json());
    
    const blog =require("./routes/blog")
    //mount
    app.use("/api/v1", blog);
    
    const connectWithDb=require(".config/database");
    connectWithDb();

    //start server
    app.listen(PORT,() =>{
    console.log(`App is started at Port no.$(PORT) `);
    })


    app.get("/", (req,res)=>{
    res.send('This is my HOMEPAGE') 
    })

// app.listen(3000,()=>{
//     console.log("APP is Successfully ");

// });

