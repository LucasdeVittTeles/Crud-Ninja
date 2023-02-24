import "./buttonDelete.css";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

const ButtonDelete = (id) => {

  const ninjaId = id.id;
  console.log(ninjaId);

  const deleteNinja = async () => {
    await axios.delete(`http://localhost:5000/deletar/${ninjaId}`);
  };

  return (
    <button className="buttonConatiner" onClick={() => deleteNinja()}>
      <AiFillDelete size={32} />
    </button>
  );
};

export default ButtonDelete;
