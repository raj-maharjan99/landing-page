import React, { useState } from "react";
import styles from "./advertisment.module.css";

function Advertisment() {
  const [showModal, setShowModal] = useState(false);
  function MyModal() {
    return (
      <>
        <div
          className={styles.modalWrapper}
          onClick={() => setShowModal(false)}
        ></div>
        <div className={styles.modalContainer}>
          <h3>
            आवश्यक्ता ! आवश्यक्ता ! आवश्यक्ता ! <br />
          </h3>{" "}
          <br />
          <p>
            {" "}
            <h2>
              "रेलको चक्का मा हावा हाल्न जान्ने एक मेहनती कामदारको आवश्यक्ता।"
            </h2>
            <br />
            <br />
            <h4>
              "स्थान: यूपी, बिहार" <br /> " कम्पनी: हावा प्राइभेट लिमिटेड "
              <br />
              "योग्यता: गाडीको टायरमा मुख ले हावा हाल्न जानेको हुनु पर्ने"
              <br />
              अनुभव: ५ वर्ष"
            </h4>
          </p>{" "}
          <br /> <br />
          <br />
          <a href="https://www.indeed.com/" target="_blank">
            <h5>More Details </h5> <br /> <br />{" "}
          </a>
          <button className={styles.btn} onClick={() => setShowModal(false)}>
            "बन्द गर्नुहोस्"
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      {" "}
      {/* <br /> */}
      <div>
        <button className={styles.btn1} onClick={() => setShowModal(true)}>
          <marquee behavior="" direction="">
            {" "}
            " काम खोज्दै हो ? यहाँ क्लिक गर्नुहोस्। "
          </marquee>
        </button>

        {showModal && <MyModal />}
      </div>
    </>
  );
}

export default Advertisment;
