const express = require("express");
const router = require("express").Router();
const Workout = require("../models/Workout.js");

// Post a workout
router.post("/workouts", ({ body }, res) => {
  // console.log('inside the post route', body)

  Workout.create(body)
    .then((dbWorkout) => {
      // console.log("res post route: ", dbWorkout)
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Get all workouts
router.get("/workouts", async (req, res) => {
  try {
    const workout = await Workout.aggregate([
        {$addFields: {totalDuration: {$sum: "$exercises.duration"}} }
    ]);
    res.json(workout);
  } catch (err) {
    res.json(err);
  }
});

// Update workout
router.put("/workouts/:id", async (req, res) => {
  await Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true }
  ).then(workout => res.json(workout));
});

// Get duration
router.get("/workouts/range", async (req, res) => {
  try {
    const agg = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]).limit(7);
    console.log("inside aggregate:", agg);
    res.json(agg);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

module.exports = router;
