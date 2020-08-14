const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: "Enter an exercise name"
        },
        duration: {
            type: Number,
            required: true
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    }],
    day: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
