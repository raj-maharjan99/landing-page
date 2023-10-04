import React, { useState } from "react";
import styles from "./advertisment.module.css";

function Advertisment() {
  const [showModal, setShowModal] = useState(true);
  function MyModal() {
    return (
      <>
        <div
          className={styles.modalCover}
          onClick={() => setShowModal(false)}
        ></div>
        <div className={styles.modalContainer}>
          <button className={styles.btn} onClick={() => setShowModal(false)}>
            "बन्द गर्नुहोस्"
          </button>
          <img
            src="https://templates.mediamodifier.com/622b3b11eeac98ae75351537/job-vacancy-retails-template.jpg"
            height="250px"
            width="200px"
            alt=""
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div>{showModal && <MyModal />}</div>
    </>
  );
}

export default Advertisment;
