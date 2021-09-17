
import styles from "./Navbar.module.css";

function Navbar({children}) {
    return (
        <div className={styles.navbar} style={{
            width: "100vw",
            height: "50px",
            backgroundColor: "black",
            display: "flex",
            justifyContent:"space-between"
        }}>
          {children}
        </div>
    );
}

export default Navbar;