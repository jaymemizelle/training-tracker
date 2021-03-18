const express = require("express");
const router = require("express").Router();
const Workout = require("../models/Workout.js");


    // Post a workout
    router.post("/workouts", ({body}, res) => {
        console.log('inside the post route', body)
        Workout.create(body)
        .then(dbWorkout => {

            console.log("res post route: ", dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    });


    // Get all workouts
    router.get('/workouts', async (req, res) => {
        try {
            const workout = await Workout.find();
            res.json(workout)
        } catch (err) {
            res.json(err)
        }
    });

    // Update workout
    router.put('/workouts/:id', async (req, res) => {
        


    });

    
    router.get('/workout/range', async (req, res) => {
        try {
            const workout = await Workout.findOne({ _id: req.params.id });
            res.json(workout);
        } catch (err) {
            console.log(err);
            res.json({ message: err.message })
        }
    });


module.exports = router;