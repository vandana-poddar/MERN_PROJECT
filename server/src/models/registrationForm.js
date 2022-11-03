const mongoose = require('mongoose')


const registrationFormSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    mobileno: {
        type: Number,
        required: true,
        unique: true,
        min: 10
    },
    address: {
        type: String,
        required: true
    },
    annualIncome: {
        type: String,
        required: true
    },
    kids: {
        type: Number,
        required: true
    },
    adults: {
        type: Number,
        required: true
    },
    
})
//creating new collection
const RegistraionForm = new mongoose.model("registrationForm", registrationFormSchema);
module.exports = RegistraionForm;
