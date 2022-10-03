import Header from '../../components/header/header';
import Form from '../../components/form/form';
import './registrationPage.css';

const RegistrationPage = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <h1>Tela de cadastro ninja</h1>
        <Form />
      </main>
    </div>
  );
};

export default RegistrationPage;
