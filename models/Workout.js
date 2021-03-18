const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  // Resistance
  exercises: [{
    name: {
      type: String,
      trim: true,
      required: "Exercise Name is a Required Field",
      validate: [({ length }) => length <= 50, "Exercise name is too long! Must be less than 50 characters."]
    },

    type: {
      type: String,
      trim: true,
      enum: ['Resistance', 'Cardio'],
      default: 'Resistance',
      required: "Exercise Type is required",
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
    
  }],

  day: {
    type: Date,
    trim: true,
    default: Date.now
  },

});


const Workout = mongoose.model("Workout", WorkoutSchema);


module.exports = Workout;

