import Header from '../../components/header/header';
import Form from '../../components/form/form';
import styles from './registrationPage.module.css';

const RegistrationPage = () => {

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Form />
      </main>
      </div>
  );
};

export default RegistrationPage;
