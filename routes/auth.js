const express = require('express');
const router = express.Router();
const User = require('../models/user');
const validation = require('../utils/validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        const { error } = validation.validateUser(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const existingUser = await User.findByEmail(req.body.email);
        if (existingUser) {
            return res.status(409).json({ message: 'Email already exists' });
        }

        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password required' });
        }

        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        let passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const payload = user;
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.status(200).json({ message: 'Login successful', token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
