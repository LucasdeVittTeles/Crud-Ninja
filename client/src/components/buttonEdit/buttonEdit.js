import "./buttonEdit.css";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const ButtonEdit = (id) => {

const navigate = useNavigate();

  return (
    <button
    onClick={() => navigate('/editPage', {state: {id}})}
    className="editButtonContainer">
      <AiFillEdit size={32} />
    </button>
  );
};

export default ButtonEdit;
