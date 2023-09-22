import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <>
      <div className={styles.headerBox}>
        <div className={styles.heading}>TEAM-1 FBD36</div>
        <li>
          <a href="">
            <h4>Home</h4>
          </a>
        </li>
        <li>
          <a href="">
            {" "}
            <h4>About</h4>
          </a>
        </li>
        <li>
          <a href="">
            {" "}
            <h4>Gallery</h4>
          </a>
        </li>
        <li>
          <a href="">
            <h4>Contact</h4>
          </a>
        </li>
        <li>
          <a href="">
            {" "}
            <h4>Feedback</h4>
          </a>
        </li>
        <li>
          <a href="">
            {" "}
            <h4>cHaTgPt</h4>{" "}
          </a>
        </li>
      </div>
    </>
  );
}
export default Header;
