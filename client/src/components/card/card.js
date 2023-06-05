import styles from "./card.module.css";
import axios from "axios";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Card = () => {
  const [ninjas, setNinjas] = useState([]);

  const navigate = useNavigate();

  const getNinjas = async () => {
    try {
      const response = await axios.get("http://localhost:5000/listagem");
      const data = response.data;
      setNinjas(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNinja = async (id) => {
    await axios
      .delete(`http://localhost:5000/deletar/${id}`)
      .then(() => {
        toast.success("Ninja deletado com sucesso.");
      })
      .catch((error) => {
        toast.error("Erro ao deletar ninja: " + error.response.data.msg);
      });
  };

  const shippingId = (id) => {
    navigate("/editPage", { state: { id } });
  };

  useEffect(() => {
    getNinjas();
  }, [ninjas]);

  return ninjas.map((ninja) => (
    <div className={styles.cardContainer} key={ninja.id}>
      <div className={styles.card}>
        <h1>{ninja.nome}</h1>
        <h2>{ninja.claNinja}</h2>
        <div className={styles.content}>
          <p>{ninja.idade} anos</p>
          <p>{ninja.numeroMissoes} missoes Ninja</p>
          <p>Classificação: {ninja.ranking}</p>
        </div>
      </div>
      <div className={styles.cardButtons}>
        <button
          style={{ background: "#D81F25" }}
          className={styles.button}
          onClick={() => deleteNinja(ninja.id)}
        >
          <AiFillDelete size={32} />
        </button>
        <button
          style={{ background: "#0077b6" }}
          className={styles.button}
          onClick={() => shippingId(ninja.id)}
        >
          <AiFillEdit size={32} />
        </button>
      </div>
    </div>
  ));
};

export default Card;
