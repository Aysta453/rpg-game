import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import User from '../models/user.js';
import Hero from '../models/hero.js';

const router = express.Router();

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.status(404).json({message: "Nie ma takiego użytkownika. Proszę spróbowac ponownie.",});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(404).json({ message: "Hasło jest niepoprawne. Proszę spróbowac ponownie." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
        
    } catch (error) {
                 res.status(500).json({ message: 'Serwer nie odpowiada. Proszę spróbować później.' });
    }
}
export const signup = async (req, res) => {

    const { email, password, confirmPassword ,nick} = req.body;
    
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(404).json({ message: "Podany email jest już zajęty. Proszę spróbowac ponownie." });

        const existingUserNick = await Hero.findOne({ nick });
        if (existingUserNick) return res.status(404).json({ message: "Podana nazwa gracza jest już zajęta. Proszę spróbowac ponownie." });

        if (password !== confirmPassword) return res.status(404).json({ message: "Podane hasła się nie zgadzają. Proszę spróbowac ponownie." });
        
        const hashPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashPassword});

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });

                res.status(200).json({ result: result, token });
    } catch (error) {
         res.status(500).json({ message: 'Serwer nie odpowiada. Proszę spróbować później.' });
    }
    
}
