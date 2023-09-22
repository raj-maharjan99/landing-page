import React from 'react';
import styles from './footer.module.css';

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-info']}>
        <p>&copy; {props.year} {props.company}</p>
        <p>{props.address}</p>
      </div>
      <div className={styles['footer-contact']}>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
      </div>
    </footer>
  );
}

export default Footer;