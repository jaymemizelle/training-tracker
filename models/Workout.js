const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exerciseType: {
    type: String,
    trim: true,
    enum: ['Resistance', 'Cardio'],
    default: 'Resistance',
    required: "Exercise Type is required",
  },

  // Resistance
  exerciseName: {
    type: String,
    trim: true,
    required: "Exercise Name is a Required Field"
  },

  weight: {
    type: Number,
    trim: true,
  },

  sets: {
    type: Number,
    trim: true,
  },

  reps: {
    type: Number,
    trim: true,
  },

  distance: {
    type: Number,
    trim: true,
  },

  duration: {
    type: Number,
    trim: true,
    required: "Duration is a Required Field"
  },

  workoutCreated: {
    type: Date,
    default: Date.now()
  },

});


const Workout = mongoose.model("Workout", WorkoutSchema);


module.exports = Workout;
