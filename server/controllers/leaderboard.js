import express from 'express';
import mongoose from 'mongoose';

import Student from '../models/studentModel.js';

const router = express.Router();

export const getLeaderboard = async (req, res) => { 
    try {
        const leaderboard = await Student.find();

        res.status(200).json(leaderboard);
    } catch (error) {
        res.status(404).json({ message: error.message }); 
    }
}