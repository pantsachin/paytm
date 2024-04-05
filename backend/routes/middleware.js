const express = require('express');
const {JWT_SECRET} = require('./config');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(403).json({
            message: "Doesn't have the bearer token"
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(tojen, JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({
            message: "Something is not right"
        })
    }


}

module.exports = {
    authMiddleware
}

