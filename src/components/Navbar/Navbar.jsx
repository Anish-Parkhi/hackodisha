import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbarMainContainer} >
      <div className={styles.navbarLeftContainer}>LearnX</div>
      <div className={styles.navbarRightContainer}>
        <div>My Learning</div>
        <div>My Profile</div>
      </div>
    </div>
  );
}

export default Navbar;
