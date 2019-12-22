"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var database_1 = __importDefault(require("./db/database"));
var router = express.Router();
exports.default = router;
router.get('', function (req, res) {
    // res.send("Get all items");
    database_1.default.query('SELECT * FROM item', function (error, results, fields) {
        res.send(results);
    });
});
router.post('', function (req, res) {
    console.log(req.body);
    res.status(201).send(req.body.id + "");
});
