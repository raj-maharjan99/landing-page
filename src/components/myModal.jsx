import React, { useState } from "react";
import styles from "./myModal.module.css";
function MyModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className={styles.modalCover}
        onClick={() => setShowModal(false)}
      ></div>
      <div className={styles.modalContainer}>
        <img
          src="https://templates.mediamodifier.com/622b3b11eeac98ae75351537/job-vacancy-retails-template.jpg"
          height="500px"
          width="400px"
          alt=""
        />
        <button className={styles.btn} onClick={() => setShowModal(false)}>
          "बन्द गर्नुहोस्"
        </button>
      </div>
    </>
  );
}
export default MyModal;
