import mongoose from 'mongoose';

const coursecontentSchema = mongoose.Schema({
    courseId: {
        type: String,
        required: true,
    },
    quizzes: [
        {
            quizTitle: String,
            quizDescription: String,
            questions: [
                {
                    questionText: String,
                    options: [
                        {
                            optionText: String,
                            isCorrect: Boolean
                        },
                        {
                            optionText: String,
                            isCorrect: Boolean
                        },
                        {
                            optionText: String,
                            isCorrect: Boolean
                        },
                        {
                            optionText: String,
                            isCorrect: Boolean
                        }
                    ]
                },
            ]
        }
    ]
})

const CoursecontentModel = mongoose.model('Coursecontent', coursecontentSchema);

export default CoursecontentModel;