import LanguageModel from '../models/languagesModel.js';

export const postLaunguage = async  (req, res) => {
    const data = req.body;
    const newLaunguage = new LanguageModel(data);
    try {
        await newLaunguage.save();
        res.status(201).json(newLaunguage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getLaunguage = async (req, res) => {
    try {
        const language = await LanguageModel.find();
        res.status(200).json(language);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}