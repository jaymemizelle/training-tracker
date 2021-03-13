const express = require("express");
const router = require("express").Router();

module.exports = function() {
    router.get("/", (req, res) => {
        res.send("index.html")
    });

    router.get("/exercise", (req, res) => {
        res.send("exercise.html")
    });

    router.get("/stats", (req, res) => {
        res.send("stats.html")
    });


}