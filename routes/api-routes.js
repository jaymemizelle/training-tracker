const express = require("express");
const router = require("express").Router();
const Workout = require("../models/Workout.js");



    router.post("/workouts", ({body}, res) => {
        Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });


    router.get('/workouts', async (req, res) => {
        try {
            const workout = await Workout.find();
            res.json(workout)
        } catch (err) {
            res.json(err)
        }
    });

    router.get('/workout/:id', async (req, res) => {
        try {
            const workout = await Workout.findOne(req.params.id);
        } catch (err) {
            res.json({ message: err.message })
        }
    });


module.exports = router;