import styles from "./loginPage.module.css";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";
import React from "react";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentImage}></div>
        <div className={styles.contentLogin}>
          <h2>FAÇA SEU LOGIN</h2>
          <Input
            type="text"
            name="user"
            placeholder="Digite seu nome de usuario"
            text="Usuário"
          />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            text="Senha"
          />
          <Button type="submit" text='Login' backgroundColor= '#D81F25' color='#FFFFFF'  />
          <div className={styles.userRegister}>
          <span>Não tem uma conta?</span>
          <Link to={"/"} style={{ fontSize: 14, textDecoration: 0, color: "#D81F25" }}>Cadastre-se</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
