const mongoose = require('mongoose');
// const Transaction = require('./Transaction');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    balance: Number,
    income: Number,
    expense: Number,
    transactions: {
        type: []
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;