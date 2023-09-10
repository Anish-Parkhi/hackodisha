import CoursecontentModel from '../models/coursecontentModel.js'

export const getCourseQuiz = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await CoursecontentModel.find({ courseId: id });
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postCourseQuiz = async (req, res) => {
    const courseQuiz = req.body;
    const newCourseQuiz = new CoursecontentModel(courseQuiz);
    try {
        await newCourseQuiz.save();
        res.status(201).json(newCourseQuiz);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}