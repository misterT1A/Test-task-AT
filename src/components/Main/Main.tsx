import type { ReactElement } from 'react';

import styles from './main.module.scss';
import UsersList from '../UsersList/UsersList';

const Main = (): ReactElement => {
  return (
    <main className={styles.main}>
      <article className={styles.wrapper}>
        <section className={styles.title_wrapper}>
          <h1 className={styles.title}>Активные</h1>
        </section>
        <UsersList />
      </article>
    </main>
  );
};

export default Main;
