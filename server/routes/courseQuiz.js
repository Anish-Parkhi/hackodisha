import express from 'express';
import { getCourseQuiz, postCourseQuiz } from '../controllers/courseQuiz.js';

const getQuiz = express.Router();

//get course by its ID

getQuiz.get('/getCourseQuiz/:id', getCourseQuiz);

//post the quiz with respect to course ID
getQuiz.post('/postCourseQuiz', postCourseQuiz);


export default getQuiz;
