import { GiNinjaStar } from "react-icons/gi";
import axios from "axios";
import "./form.css";
import { useState } from "react";

const Form = () => {

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [claNinja, setClaNinja] = useState("");
  const [numeroMissoes, setNumeroMissoes] = useState(0);
  const [ranking, setRanking] = useState("");

  const postNinja = async () => {
    try{
      await axios.post("http://localhost:5000/cadastro", {
        nome: nome,
        idade: idade,
        claNinja: claNinja,
        numeroMissoes: numeroMissoes,
        ranking: ranking,
      });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form className="form" action="">
      <div className="ninjaStar">
        <GiNinjaStar size={35} />
      </div>
      <input
        className="input"
        type="text"
        placeholder="Digite o nome do ninja"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="Digite a idade do ninja"
        onChange={(e) => setIdade(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Digite o clã do ninja"
        onChange={(e) => setClaNinja(e.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="Digite o numero de Missões"
        onChange={(e) => setNumeroMissoes(e.target.value)}
      />
      <h4 className="RankingTitle">Selecione o Ranking de ninja</h4>
      <div className="rankingNinja">
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
      <button className="button" type="submit" onClick={() => postNinja()}>
        Salvar
      </button>
    </form>
  );
};

export default Form;
