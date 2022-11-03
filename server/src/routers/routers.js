const express = require('express');
const router = new express.Router();
const registrationForm = require('../models/registrationForm');

//handling get request


router.get('/', (req, res) => {
    res.send('welcome to registration');
});

// router.get('/analytics', (req, res) => {
//     res.send('welcome to analytics');
// });
router.get('/register', async(req, res) => {
   try {
        const getuser = await registrationForm.find({});
        res.send(getuser);
    } catch (e) {
        res.status(400).send(e);
    }
});
router.post('/register', async (req, res) => {
   
        try {
            const addUser = new registrationForm(req.body);
            const record = await addUser.save();
            res.status(201).send(record);
        } catch (e) {
            console.log(e)
            res.status(400).send(e);
        }
});

router.patch("/registrationForm/:id", async (req, res) => {
    try {
        const getrecord = await registrationForm.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(getrecord);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;