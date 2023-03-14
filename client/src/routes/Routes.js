import RegistrationPage from "../pages/registrationPage/registrationPage";
import ListingPage from "../pages/listingPage/listingPage";
import EditPage from "../pages/EditPage/editPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/loginPage/loginPage";
import UserRegistration from "../pages/userRegistration/userRegistration";
import { RequireAuth } from "../contexts/auth/RequireAuth";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <RegistrationPage />
            </RequireAuth>
          }
        />
        <Route path="/listingPage" element={ <RequireAuth><ListingPage /></RequireAuth>} />
        <Route path="/editPage" element={<RequireAuth><EditPage /></RequireAuth>} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/userRegistration" element={<UserRegistration />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
