import Header from "../../components/header/header";
import "./editPage.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditPage = () => {
  const location = useLocation();
  const idNinja = location.state;
  console.log(idNinja.id.id);

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [claNinja, setClaNinja] = useState("");
  const [numeroMissoes, setNumeroMissoes] = useState(0);
  const [ranking, setRanking] = useState("");

  const getNinja = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/listagem/${idNinja.id.id}`
      );
      const data = response.data;
      setNome(data.nome);
      setIdade(data.idade);
      setClaNinja(data.claNinja);
      setNumeroMissoes(data.numeroMissoes);
      setRanking(data.ranking);
    } catch (error) {
      console.log(error);
    }
  };

  const putNinja = async () => {
    try {
      await axios.put(`http://localhost:5000/editar/${idNinja.id.id}`, {
        nome: nome,
        idade: idade,
        claNinja: claNinja,
        numeroMissoes: numeroMissoes,
        ranking: ranking,
      });
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getNinja();
  }, []);



  return (
    <div className="containerPageEdit">
      <Header />
      <main className="mainPageEdit">
        <h1>Edicao de Ninja</h1>
        <form action="" className="formEdit">
          <input
            className="input"
            type="text"
            placeholder="Digite o nome do ninja"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="input"
            type="number"
            placeholder="Digite a idade do ninja"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Digite o clã do ninja"
            value={claNinja}
            onChange={(e) => setClaNinja(e.target.value)}
          />
          <input
            className="input"
            type="number"
            placeholder="Digite o numero de missões"
            value={numeroMissoes}
            onChange={(e) => setNumeroMissoes(e.target.value)}
          />
          <h4 className="RankingTitle">Selecione o Ranking de ninja</h4>
          <div className="rankingNinjaEdit">
            <input
              type="radio"
              id="ranking1"
              name="ranking"
              value="Genin"
              checked = { "Genin" === ranking}
              onChange={(e) => setRanking(e.target.value)}
            />
            <label for="ranking1">Genin</label>
            <input
              type="radio"
              id="ranking2"
              name="ranking"
              value="Chunin"
              checked = { "Chunin" === ranking}
              onChange={(e) => setRanking(e.target.value)}
            />
            <label for="ranking2">Chunin</label>
            <input
              type="radio"
              id="ranking3"
              name="ranking"
              value="Jounin"
              checked = { "Jounin" === ranking}
              onChange={(e) => setRanking(e.target.value)}
            />
            <label for="ranking3">Jounin</label>
            <input
              type="radio"
              id="ranking4"
              name="ranking"
              value="Kage"
              checked = { "Kage" === ranking}
              onChange={(e) => setRanking(e.target.value)}
            />
            <label for="ranking4">kage</label>
          </div>
          <button type="submit" className="button" onClick={() => putNinja()}>
            Editar
          </button>
        </form>
      </main>
    </div> 
  );
};

export default EditPage;
