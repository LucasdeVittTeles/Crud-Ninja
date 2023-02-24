import RegistrationPage from './pages/registrationPage/registrationPage';
import ListingPage from './pages/listingPage/listingPage';
import EditPage from './pages/EditPage/editPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage/loginPage';

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/listingPage" element={<ListingPage />} />
        <Route path="/editPage" element={<EditPage />} />
        <Route path='/loginPage' element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
};

export default Rotas;
