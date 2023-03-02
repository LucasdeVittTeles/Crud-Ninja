import styles from "./userRegistration.module.css";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { messagesAlert } from "../../constants/messagesAlert";
import { useCallback, useEffect, useState } from "react";

const LoginPage = () => {
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // primeira versao

  // const alertUserName = (text) => {
  //   if (text === "") {
  //     setUserNameError(messagesAlert.required);
  //   }
  //   if (text.length < 6 && text !== "") {
  //     setUserNameError(messagesAlert.minChar);
  //   }
  // };

  const alertUserName = useCallback(() => {
    if (userName === "") {
      setUserNameError(messagesAlert.required);
    }
    if (userName.length < 6 && userName !== "") {
      setUserNameError(messagesAlert.minChar);
    }
  }, [userName]);

  const alertPassword = useCallback(() => {
    if (password === "") {
      setPasswordError(messagesAlert.required);
    }
    if (password.length < 6 && password !== "") {
      setPasswordError(messagesAlert.minChar);
    }
  }, [password]);

  useEffect(() => {
    alertUserName();
    alertPassword();
  }, [userName, password]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form className={styles.formRegister}>
          <h2>Cadastro de usuário</h2>
          <Input
            type="text"
            name="user"
            placeholder="Defina seu nome de usuario"
            text="Usuário"
            handleOnChange={(e) => {
              setUserName(e.target.value);
            }}
            alert={userNameError}
          />
          <Input
            type="password"
            name="password"
            placeholder="Defina sua senha de usuario"
            text="Senha"
            handleOnChange={(e) => setPassword(e.target.value)}
            alert={passwordError}
          />
          <Button
            type="submit"
            text="Cadastrar"
            backgroundColor="#D81F25"
            color="#FFFFFF"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
