import styles from "./loginPage.module.css";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentImage}></div>
        <div className={styles.contentLogin}>
          <h2>Tela de login</h2>
          <Input/>
          <Input />
          <h4>Não tem uma conta? </h4>
          <Link to={'/'}>Cadastre-se</Link>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
