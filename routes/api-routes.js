const express = require("express");
const router = require("express").Router();



    router.post("/submit", ({body}, res) => {
        User.create(body)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
    });

module.exports = router;