import express from 'express';
import mongoose from 'mongoose';

import Discussion from '../models/discussion.js';

const router = express.Router();

export const getDoubts = async (req, res) => { 
    try {
        const doubts = await Discussion.find();

        res.status(200).json(doubts);
    } catch (error) {
        res.status(404).json({ message: error.message }); 
    }
}

export const getDoubt = async (req, res) => {     
    const { id } = req.params; 

    try {
        const doubt = await Discussion.findById(id);
        console.log(doubt);
        res.status(200).json(doubt);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} 

export const createDoubt = async (req, res) => {
    const doubt = req.body;

    console.log(doubt);



    try {
        const newDiscussion = new Discussion({ name: req.body.name, question: req.body.question, creator: req.body.creator });
        await newDiscussion.save();

        res.status(201).json(newDiscussion );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateDoubt = async (req, res) => {
    const { id } = req.params;
    const { name, question } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedDoubt = { name, question, _id: id };

    await Discussion.findByIdAndUpdate(id, updatedDoubt, { new: true });

    res.json(updatedDoubt);
}

export const deleteDoubt = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Discussion.findByIdAndRemove(id);

    res.json({ message: "Question deleted successfully." });
}

export const commentDoubt = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const doubt = await Discussion.findById(id);
    console.log(value);
    console.log(req.userId);

    doubt.comments.push(value);

    const updatedDoubt = await Discussion.findByIdAndUpdate(id, doubt, { new: true });

    res.json(updatedDoubt);
};