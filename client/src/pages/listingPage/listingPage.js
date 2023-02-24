import Header from "../../components/header/header";
import Card from "../../components/card/card";
import axios from "axios";
import "./listingPage.css";
import { useEffect, useState } from "react";

const ListingPage = () => {

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
    <div className="container_listingPage">
      <Header />
      <div className="main_listingPage">
        <Card />
      </div>
    </div>
  );
};

export default ListingPage;
