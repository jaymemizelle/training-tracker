const express = require("express");
const router = require("express").Router();
const Workout = require("../models/Workout.js");



    router.post("/", ({body}, res) => {
        Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });





    

module.exports = router;