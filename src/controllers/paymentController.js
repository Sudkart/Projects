// src/controllers/paymetnController.js

const Payment = require('../models/paymentModel');

const createPayment = async (req,res) => {
    try{
        const payment = new Payment(req.body);
        await payment.save();
        res.status(201).json(payment);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
};

const getPayments = async (req,res) => {
    try{
        const payments = await Payment.find();
        res.status(200).json(payments);
    }
    catch (error)
    {
        res.status(400).json({error:error.message});
    }
};

module.exports = {
    createPayment,
    getPayments,
};
