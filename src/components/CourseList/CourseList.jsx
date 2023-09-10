import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './CourseList.module.css';

function CourseList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/launguageList')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let courseId = [];
  return (
    <>
      <Navbar />
      <div className={styles.CourseListMainContainer}>
        {/* Card  */}
        {data.map((item, index) => {
          courseId.push(item._id);
          return (
            <div className={styles.cardMainContainer} key={item._id}>
              <div>
                <div>
                  <div className={styles.cardMainContainerHeader}>
                    {item.language}
                  </div>
                  <div className={styles.cardMainContainerDescription}>
                    {item.description}
                  </div>
                </div>
                <hr style={{ color: 'black' }} />
                <div className={styles.CourseList}>
                  <ul>
                    <li>12 Modules</li>
                    <li>2 Quizzes</li>
                    <li>1 speech Activity</li>
                  </ul>
                </div>
                <hr />
                <div className={styles.courseInfo}>
                  <div>Author: {item.author}</div>
                  <div>Level: {item.level}</div>
                  <div>Duration: {item.duration}</div>
                </div>
                <div
                  onClick={() => {
                    navigate('/courselnfo', { state: { courseId: item.courseId } });
                  }}
                  style={{ textAlign: 'right' }}
                >
                  View More
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CourseList;
