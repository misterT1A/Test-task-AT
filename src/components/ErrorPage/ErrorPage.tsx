import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import btnStyles from '../../UI/button/button.module.scss';
import styles from './Error-page.module.scss';

const ErrorPage = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Something went wrong</h1>
      <button data-testid="return-button" type="button" className={btnStyles.button} onClick={() => navigate('/')}>
        return to main page
      </button>
    </section>
  );
};

export default ErrorPage;
