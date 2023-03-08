import Header from "../../components/header/header";
import styles from "./editPage.module.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { messagesAlert } from "../../constants/messagesAlert";
import axios from "axios";

const EditPage = () => {
  const location = useLocation();
  const idNinja = location.state;

  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [ninjaClan, setNinjaClan] = useState("");
  const [numberMissions, setNumberMissions] = useState(null);
  const [ranking, setRanking] = useState("");


  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [ninjaClanError, setNinjaClanError] = useState("");
  const [numberMissionsError, setNumberMissionsError] = useState("");

  const getNinja = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/listagem/${idNinja.id}`
      );
      const data = response.data;
      setName(data.nome);
      setAge(data.idade);
      setNinjaClan(data.claNinja);
      setNumberMissions(data.numeroMissoes);
      setRanking(data.ranking);
    } catch (error) {
      console.log(error);
    }
  };

  const putNinja = async () => {
    try {
      await axios.put(`http://localhost:5000/editar/${idNinja.id}`, {
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

  const alertName = useCallback(() => {
    setNameError("");
    if (name === "") {
      setNameError(messagesAlert.required);
    }
  }, [name]);

  const alertAge = useCallback(() => {
    setAgeError("");
    if (!age) {
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
    if (!numberMissions) {
      setNumberMissions(null);
    }
    if (numberMissions === null) {
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

  useEffect(() => {
    getNinja();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <form className={styles.form}>
          <h1>EDIÇÃO DE NINJA</h1>
          <Input
            type="text"
            name="name"
            placeholder="Defina o nome do ninja"
            text="Nome do Ninja"
            value={name}
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
            value={age}
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
            value={ninjaClan}
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
            value={numberMissions}
            handleOnChange={(e) => {
              setNumberMissions(e.target.value);
            }}
            alert={numberMissionsError}
          />
          <h4>Selecione o Ranking de ninja</h4>
          <div className={styles.rankingNinjaEdit}>
            <input
              type="radio"
              id="ranking1"
              name="ranking"
              value="Genin"
              checked={"Genin" === ranking}
              onChange={(e) => setRanking(e.target.value)}
            />
            <label for="ranking1">Genin</label>
            <input
              type="radio"
              id="ranking2"
              name="ranking"
              value="Chunin"
              checked={"Chunin" === ranking}
              onChange={(e) => setRanking(e.target.value)}
            />
            <label for="ranking2">Chunin</label>
            <input
              type="radio"
              id="ranking3"
              name="ranking"
              value="Jounin"
              checked={"Jounin" === ranking}
              onChange={(e) => setRanking(e.target.value)}
            />
            <label for="ranking3">Jounin</label>
            <input
              type="radio"
              id="ranking4"
              name="ranking"
              value="Kage"
              checked={"Kage" === ranking}
              onChange={(e) => setRanking(e.target.value)}
            />
            <label for="ranking4">kage</label>
          </div>
          <Button
            type="submit"
            text="Editar Ninja"
            backgroundColor="#D81F25"
            color="#FFFFFF"
            handleOnClick={putNinja}
          />  
        </form>
      </main>
    </div>
  );
};

export default EditPage;
