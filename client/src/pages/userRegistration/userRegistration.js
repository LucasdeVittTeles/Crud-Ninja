import styles from "./userRegistration.module.css";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import React from "react";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.formRegister}>
          <h2>Cadastro de usuário</h2>
          <Input
            type="text"
            name="user"
            placeholder="Defina seu nome de usuario"
            text="Usuário"
          />
          <Input
            type="password"
            name="password"
            placeholder="Defina sua senha de usuario"
            text="Senha"
          />
          <Button
            type="submit"
            text="Cadastrar"
            backgroundColor="#D81F25"
            color="#FFFFFF"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
