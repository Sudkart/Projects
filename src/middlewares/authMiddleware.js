// src/middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next) => {
    const token = req.header('Authorization').replace('Bearer','');
    if(!token) return res.status(401).json({error:'Access denied'});

    try{
        const decoded = jwt.verify(token,process.env.SECRET_kEY);
        req.user = decoded;
        next();
    }
    catch(error){
        res.status(400).json({error:'Invalid token'});
    }
};