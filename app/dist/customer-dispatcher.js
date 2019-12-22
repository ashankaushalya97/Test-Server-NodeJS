"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mysql = require("mysql");
var database_1 = __importDefault(require("./db/database"));
var router = express.Router();
exports.default = router;
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'sample2',
    port: 3306
});
router.get('', function (req, res) {
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
    database_1.default.query('SELECT * FROM customer', function (error, results, fields) {
        res.send(results);
    });
});
router.post('', function (req, res) {
    console.log(req.body);
    res.status(201).send(req.body.id + "");
    console.log(req.body.id);
    console.log(req.body.name);
    console.log(req.body.address);
});
router.put('', function (req, res) {
    console.log("Update");
    res.status(201).send(req.body.id + "");
    console.log(req.body.id);
    console.log(req.body.name);
    console.log(req.body.address);
});
router.delete('', function (req, res) {
    console.log("Delete");
    res.status(201).send(req.body.id + "");
});
