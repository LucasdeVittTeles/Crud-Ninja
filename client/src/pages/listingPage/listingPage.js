import Header from '../../components/header/header';
import Card from '../../components/card/card';
import './listingPage.css'

const ListingPage = () => {
  return (
    <div className='container_listingPage'>
    <Header />
    <div className='main_listingPage'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div>
  ) 
};

export default ListingPage;
