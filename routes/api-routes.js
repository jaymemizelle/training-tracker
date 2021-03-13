const express = require("express");
const router = require("express").Router();

module.exports = function() {
    router.post("/submit", ({body}, res) => {
        User.create(body)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
    });

}