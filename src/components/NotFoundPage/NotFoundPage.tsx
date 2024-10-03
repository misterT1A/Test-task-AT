import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../ErrorPage/Error-page.module.scss';
import btnStyles from '../../UI/button/_button.module.scss';

const NotFoundPage = (): ReactNode => {
  const navigate = useNavigate();
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>404 Page not found</h1>
      <button data-testid="return-button" type="button" className={btnStyles.button} onClick={() => navigate('/')}>
        return to main page
      </button>
    </section>
  );
};

export default NotFoundPage;
