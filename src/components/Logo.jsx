import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
<<<<<<< HEAD
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
=======
      {" "}
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />{" "}
>>>>>>> origin/main
    </Link>
  );
}

export default Logo;
