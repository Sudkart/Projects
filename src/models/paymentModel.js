// src/models/paymentModel.js

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, requried: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Payment', paymentSchema);


// import { Schema, model, Document } from 'mongoose';

// interface IPayment extends Document {
//     _id: string;
//     userId: string;
//     amount: number;
//     status: 'pending' | 'completed' | 'failed';
//     createdAt: Date;
// }

// const paymentSchema = new Schema<IPayment>({
//     _id: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
//     userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//     amount: { type: Number, required: true },
//     status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
//     createdAt: { type: Date, default: Date.now }
// });

// const Payment = model<IPayment>('Payment', paymentSchema);
// export default Payment;
