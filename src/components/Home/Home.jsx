import MicIcon from '@mui/icons-material/Mic';
import QuizIcon from '@mui/icons-material/Quiz';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css';
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className={styles.homeMainContainer}>
        <div className={styles.homeRightCaontainer}>
          <div className={styles.homeRightCaontainerHeader}>
            Helping you to learn new language
          </div>
          <div className={styles.homeRightCaontainerSubHeader}>
            Enroll today in our courses and learn by video lectures, quizzes and
            word pronunciation
          </div>
          <div className={styles.homeRightCaontainerInfo}>
            <div className={styles.languageContainer}>
              <div style={{ fontSize: '2rem' }}>11</div>
              <div>Languages</div>
            </div>
            <hr style={{ margin: '0rem', marginTop: '2rem' }} />
            <div className={styles.languageContainer}>
              <div style={{ fontSize: '2rem' }}>30K+</div>
              <div>Students</div>
            </div>
          </div>
          <div className={styles.enrolNowContainer}>
            <div
              onClick={() => {
                navigate('/courselist');
              }}
            >
              Enroll Now
            </div>
          </div>
        </div>
        <div className={styles.homeLeftContainer}>
          <div className={styles.videoContainer}>
            <div style={{ marginTop: '1.5rem' }}>
              Learn through high quality video lectures
            </div>
            <div className={styles.backgroundColor}>
              <VideoCameraFrontIcon sx={{ fontSize: '3rem' }} />
            </div>
          </div>
          <div className={styles.quizContainer}>
            <div className={styles.backgroundColor}>
              <QuizIcon sx={{ fontSize: '3rem' }} />
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              Play Quizzes to asses yourself and imporve
            </div>
          </div>
          <div className={styles.speechContainer}>
            <div style={{ marginTop: '1rem' }}>
              Speech to text feature to learn the pronunciation of words
            </div>
            <div className={styles.backgroundColor}>
              <MicIcon sx={{ fontSize: '3rem' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
