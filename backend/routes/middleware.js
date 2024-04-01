const express = require('express');
const {JWT_SECRET} = require('./config');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!autHeader || !authHeader.startsWith('Bearer')) {
        return res.status(403).json({
            message: "Doesn't have the bearer token"
        })
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(403).json({
                message: "Soemthing is not right"
            })
        }
        
    } catch (err) {
        return res.status(403).json({})
    }

}

modile.exports({
    authMiddleware
})

