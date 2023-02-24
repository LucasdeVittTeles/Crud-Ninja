import './card.css';
import axios from 'axios';
import ButtonDelete from '../buttonDelete/buttonDelete'
import ButtonEdit from '../buttonEdit/buttonEdit'
import { useEffect, useState } from "react";

const Card = () => {

  const [ninjas, setNinjas] = useState([]);

  const getNinjas = async () => {
    try {
      const response = await axios.get("http://localhost:5000/listagem");
      const data = response.data;
      setNinjas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNinjas();
  }, []);


  return (
    ninjas.map((ninja) => (
      <div className='cardContainer' key={ninja.id}>
    <div className='card'>
      <h1>{ninja.nome}</h1>
      <h2>{ninja.claNinja}</h2>
      <div className='content'>
        <p>{ninja.idade} anos</p>
        <p>{ninja.numeroMissoes} missoes Ninja</p>
        <p>Classificação: {ninja.ranking}</p>
      </div>
    </div>
    <div className='cardButtons'>
    <ButtonDelete id={ninja.id}/>
    <ButtonEdit id={ninja.id}/>
    </div>
    </div>
    ))
  );


};

export default Card;
