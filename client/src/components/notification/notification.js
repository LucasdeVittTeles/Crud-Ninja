import styles from "./notification.module.css";
import { useState, useEffect } from "react";

const Notification = ({ type, msg }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
};

export default Notification;
