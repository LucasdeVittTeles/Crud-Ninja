import styles from "./loginPage.module.css";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const postLogin = async () => {
    await axios
      .post("http://localhost:5000/login", {
        userName: userName,
        password: password,
      })
      .then((data) => {
        localStorage.setItem("token", data.data.token);
        navigate("/");
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Falha ao realizar login: " + error.response.data.msg);
      });
  };

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
            handleOnChange={(e) => setUserName(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            text="Senha"
            handleOnChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            text="Login"
            backgroundColor="#D81F25"
            color="#FFFFFF"
            handleOnClick={postLogin}
          />
          <div className={styles.userRegister}>
            <span>Não tem uma conta?</span>
            <Link
              to={"/userRegistration"}
              style={{ fontSize: 14, textDecoration: 0, color: "#D81F25" }}
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
