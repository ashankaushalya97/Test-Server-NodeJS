import express = require("express");
import mysql = require("mysql");
import pool from "./db/database";

const router = express.Router();
export default  router;
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql',
    database : 'sample2',
    port:3306
});

router.get('', (req,res)=>{
    // res.send("Get all customers");
    // var mysql      = require('mysql');
    // var connection = mysql.createConnection({
    //     host     : 'localhost',
    //     user     : 'root',
    //     password : 'mysql',
    //     database : 'sample2',
    //     port:3306
    // });
    //
    // connection.connect();
    //
    // connection.query('SELECT * FROM customer',(err,results) =>{
    //     console.log(results);
    // });
    // console.log("Came here to end the connection");
    //
    // connection.end((err,args)=>{
    //    console.log("Ending the connection");
    // });

    // connection.query('SELECT * FROM customer', function (error, results, fields) {
    //     res.send(results);
    // });

    pool.query('SELECT * FROM customer', function (error, results, fields) {
        res.send(results);
    });

});

router.post('', (req,res)=>{
    console.log(req.body);
    res.status(201).send(req.body.id+"");
    console.log(req.body.id);
    console.log(req.body.name);
    console.log(req.body.address);
});

router.put('', (req,res)=>{
    console.log("Update");
    res.status(201).send(req.body.id+"");
    console.log(req.body.id);
    console.log(req.body.name);
    console.log(req.body.address);
});

router.delete('', (req,res)=>{
    console.log("Delete");
    res.status(201).send(req.body.id+"");
});