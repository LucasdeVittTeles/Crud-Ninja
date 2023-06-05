import styles from "./userRegistration.module.css";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { messagesAlert } from "../../constants/messagesAlert";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
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
    setUserNameError("");
    if (userName === "") {
      setUserNameError(messagesAlert.required);
    }
    if (userName.length < 6 && userName !== "") {
      setUserNameError(messagesAlert.minChar);
    }
  }, [userName]);

  const alertPassword = useCallback(() => {
    setPasswordError("");
    if (password === "") {
      setPasswordError(messagesAlert.required);
    }
    if (password.length < 6 && password !== "") {
      setPasswordError(messagesAlert.minChar);
    }
  }, [password]);

  useEffect(() => {
    alertUserName();
  }, [userName]);

  useEffect(() => {
    alertPassword();
  }, [password]);

  const postUser = async () => {
    await axios
      .post("http://localhost:5000/cadastroUsuario", {
        userName: userName,
        password: password,
      })
      .then((data) => {
        navigate("/loginPage");
        toast.success("Sucesso ao cadastrar usuario");
      })
      .catch((error) => {
        toast.error("Falha ao cadastrar usuario" + error.response.data.msg);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form className={styles.formRegister}>
          <h2>CADASTRO DE USUÁRIO</h2>
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
            handleOnClick={postUser}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
