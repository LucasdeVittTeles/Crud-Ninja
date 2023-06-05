import styles from "./notification.module.css";
import { useState, useEffect } from "react";

const Notification = ({ type, msg }) => {
  const [visible, setVisible] = useState(true);
  const [tipo, setTipo] = useState('');


  useEffect(() => {
    if (!msg ||  typeof msg !== "string" ) {
      setVisible(false);
      return;
    }
    setVisible(true);

    if(type === 200){
      setTipo('success')
    }else{
      setTipo('error')
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[tipo]}`}>{msg}</div>
      )}
    </>
  );
};

export default Notification;
