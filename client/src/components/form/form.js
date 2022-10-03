import Input from '../input/input';
import Button from '../button/button';
import { GiNinjaStar } from 'react-icons/gi';
import './form.css';

const Form = () => {
  return (
    <form className="form" action="">
      <div className="ninjaStar">
        <GiNinjaStar size={35} />
      </div>
      <Input type="text" placeholder="Digite o nome do ninja" />
      <Input type="number" placeholder="Digite a idade do ninja" />
      <Input type="text" placeholder="Digite o clã do ninja" />
      <Input type="number" placeholder="Digite o numero de Missões" />
      <Input type="text" placeholder="Digite o jutsu favorito" />
      <h4 className="RankingTitle">Selecione o Ranking de ninja</h4>
      <div className="rankingNinja">
        <input type="radio" id="ranking1" name="ranking" value="Genin" />
        <label for="ranking1">Genin</label>
        <input type="radio" id="ranking2" name="ranking" value="Chunin" />
        <label for="ranking2">Chunin</label>
        <input type="radio" id="ranking3" name="ranking" value="Jounin" />
        <label for="ranking3">Jounin</label>
        <input type="radio" id="ranking4" name="ranking" value="kage" />
        <label for="ranking4">kage</label>
      </div>
      <Button type="submit" text="teste" />
    </form>
  );
};

export default Form;
