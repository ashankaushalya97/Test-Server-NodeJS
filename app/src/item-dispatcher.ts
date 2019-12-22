import express = require("express");
import pool from "./db/database";

const router = express.Router();
export default router;

router.get('', (req,res)=>{
    // res.send("Get all items");

    pool.query('SELECT * FROM item', function (error, results, fields) {
        res.send(results);
    });
});


router.post('', (req,res)=>{
    console.log(req.body);
    res.status(201).send(req.body.id+"");
});

