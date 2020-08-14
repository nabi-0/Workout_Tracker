const router = require("express").Router();
const Transaction = require("../models/Workout.js");
const Workout = require("../models/Workout.js");

router.put("/api/workouts/:id", ({ body }, res) => {
    Workout.create(body)
        .then(({ _id }) => Workout.findByIdAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(data => {  //dbTransaction
            res.json(data);  //dbTransaction
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(data => {  //dbTransaction
            res.json(data);  //dbTransaction
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
module.exports = router;
