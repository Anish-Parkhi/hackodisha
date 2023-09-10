import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './CourseInfo.module.css';
function CourseInfo() {
  const location = useLocation();
  const { courseId } = location.state;
  const [data, setData] = useState([]);
  const [result, setResult] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/getCourseQuiz/101`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [courseId]);
  const [userResponse, setUserResponses] = useState([]);
  const handleOptionClick = (questionIndex, optionIndex) => {
    const updatedResponses = [...userResponse];
    updatedResponses[questionIndex] = optionIndex;
    setUserResponses(updatedResponses);
  };
  const calculateScore = () => {
    setResult(true);
    let score = 0;

    data[0]?.quizzes[0].questions.forEach((question, questionIndex) => {
      const userResponseIndex = userResponse[questionIndex];

      if (
        userResponseIndex !== undefined &&
        question.options[userResponseIndex].isCorrect
      ) {
        score++;
      }
    });

    return score;
  };

  return (
    <>
      <Navbar />
      <div>
        <div className={styles.middleContainerHeader}>French</div>
        <div className={styles.middleContainer}>
          <div className={styles.middleContainerList}>
            <div>Video lecture</div>
            <div style={{ textDecoration: 'underline' }}>Quiz</div>
            <div>Pronunciation Activity</div>
          </div>
        </div>
        <div className={styles.quizBackground}>
          <div className={styles.quizTitle}>
            {data[0]?.quizzes[0]?.quizTitle}
          </div>
          <div className={styles.quizDescription}>
            {data[0]?.quizzes[0]?.quizDescription}
          </div>
          {data[0]?.quizzes[0].questions.map((questions, questionIndex) => {
            return (
              <div className={styles.optionsMain} key={questionIndex}>
                <div className={styles.questionText}>
                  {questionIndex + 1}. {questions.questionText}
                </div>
                <div className={styles.optionsContainerMain}>
                  {questions.options.map((options, optionIndex) => {
                    return (
                      <div
                        className={styles.optionsContainer}
                        key={optionIndex}
                      >
                        <div
                          key={optionIndex}
                          onClick={() =>
                            handleOptionClick(questionIndex, optionIndex)
                          }
                        >
                          {options.optionText}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div>
            {
              <div className={styles.submitButton} onClick={calculateScore}>
                Submit
              </div>
            }
          </div>
          {
            result && (
              <div>
                <div className={styles.score}>Your Score is {calculateScore()}</div>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}

export default CourseInfo;
