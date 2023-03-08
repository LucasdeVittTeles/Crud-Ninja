import Header from "../../components/header/header";
import Card from "../../components/card/card";
import styles from "./listingPage.module.css";

const ListingPage = () => {
  return (
    <div className={styles.containerListingPage}>
      <Header />
      <div className={styles.mainListingPage}>
        <Card />
      </div>
    </div>
  );
};

export default ListingPage;
