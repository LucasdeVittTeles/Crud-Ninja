import Header from "../../components/header/header";
import styles from "./registrationPage.module.css";
import { GiNinjaStar } from "react-icons/gi";
import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { messagesAlert } from "../../constants/messagesAlert";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [ninjaClan, setNinjaClan] = useState("");
  const [numberMissions, setNumberMissions] = useState(0);
  const [ranking, setRanking] = useState("");

  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState(0);
  const [ninjaClanError, setNinjaClanError] = useState("");
  const [numberMissionsError, setNumberMissionsError] = useState("");

  const alertName = useCallback(() => {
    setNameError("");
    if (name === "") {
      setNameError(messagesAlert.required);
    }
  }, [name]);

  const alertAge = useCallback(() => {
    setAgeError("");
    if (isNaN(age) && age !== null) {
      setAge(null);
    }

    if (age === null) {
      setAgeError(messagesAlert.required);
    }
    if (age < 0) {
      setAgeError(messagesAlert.positiveNumber);
    }
  }, [age]);

  const alertNinjaClan = useCallback(() => {
    setNinjaClanError("");
    if (ninjaClan === "") {
      setNinjaClanError(messagesAlert.required);
    }
  }, [ninjaClan]);

  const alertNumberMissions = useCallback(() => {
    setNumberMissionsError("");
    if (numberMissions === 0) {
      setNumberMissionsError(messagesAlert.required);
    }
    if (numberMissions < 0) {
      setNumberMissionsError(messagesAlert.positiveNumber);
    }
  }, [numberMissions]);

  useEffect(() => {
    alertName();
  }, [name]);

  useEffect(() => {
    alertAge();
  }, [age]);

  useEffect(() => {
    alertNinjaClan();
  }, [ninjaClan]);

  useEffect(() => {
    alertNumberMissions();
  }, [numberMissions]);

  const postNinja = async () => {
    try {
      await axios.post("http://localhost:5000/cadastro", {
        nome: name,
        idade: age,
        claNinja: ninjaClan,
        numeroMissoes: numberMissions,
        ranking: ranking,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <form className={styles.form}>
          <div className={styles.ninjaStar}>
            <GiNinjaStar size={35} />
          </div>

          <Input
            type="text"
            name="name"
            placeholder="Defina o nome do ninja"
            text="Nome do Ninja"
            handleOnChange={(e) => {
              setName(e.target.value);
            }}
            alert={nameError}
          />

          <Input
            type="number"
            name="age"
            placeholder="Defina a idade do ninja"
            text="Idade do Ninja"
            handleOnChange={(e) => {
              setAge(e.target.value);
            }}
            alert={ageError}
          />

          <Input
            type="text"
            name="ninjaClan"
            placeholder="Defina o clã do ninja"
            text="Clã ninja"
            handleOnChange={(e) => {
              setNinjaClan(e.target.value);
            }}
            alert={ninjaClanError}
          />

          <Input
            type="number"
            name="numberMissions"
            placeholder="Numeros Missões do ninja"
            text="Numero de Missões"
            handleOnChange={(e) => {
              setNumberMissions(e.target.value);
            }}
            alert={numberMissionsError}
          />
          <h4>Selecione o Ranking de ninja</h4>
          <div className={styles.rankingNinja}>
            <input
              type="radio"
              id="ranking1"
              name="ranking"
              value="Genin"
              onChange={(e) => setRanking(e.target.value)}
            />
            <label for="ranking1">Genin</label>
            <input
              type="radio"
              id="ranking2"
              name="ranking"
              value="Chunin"
              onChange={(e) => setRanking(e.target.value)}
            />
            <label for="ranking2">Chunin</label>
            <input
              type="radio"
              id="ranking3"
              name="ranking"
              value="Jounin"
              onChange={(e) => setRanking(e.target.value)}
            />
            <label for="ranking3">Jounin</label>
            <input
              type="radio"
              id="ranking4"
              name="ranking"
              value="Kage"
              onChange={(e) => setRanking(e.target.value)}
            />
            <label for="ranking4">kage</label>
          </div>
          <Button
            type="submit"
            text="Cadastrar Ninja"
            backgroundColor="#D81F25"
            color="#FFFFFF"
            handleOnClick={postNinja}
          />
        </form>
      </main>
    </div>
  );
};

export default RegistrationPage;
