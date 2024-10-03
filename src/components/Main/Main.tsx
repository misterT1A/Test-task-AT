import { type ReactElement } from 'react';

import styles from './main.module.scss';
import UsersList from '../UsersList/UsersList';

import useGetUsers from '../../hooks/useGetUsers';
import { useAppSelector } from '../../hooks/storeHooks';

const Main = (): ReactElement => {
  useGetUsers();

  const { activeUsers } = useAppSelector((state) => state.activeUsers);
  const { archiveUsers } = useAppSelector((state) => state.archiveUsers);

  return (
    <main className={styles.main}>
      <article className={styles.wrapper}>
        {!!activeUsers.length && (
          <section className={styles.users_wrapper}>
            <section className={styles.title_wrapper}>
              <h1 className={styles.title}>Активные</h1>
            </section>
            <UsersList users={activeUsers} isInActive={false} />
          </section>
        )}

        {!!archiveUsers.length && (
          <section className={styles.users_wrapper}>
            <section className={styles.title_wrapper}>
              <h1 className={styles.title}>Архив</h1>
            </section>
            <UsersList users={archiveUsers} isInActive />
          </section>
        )}
      </article>
    </main>
  );
};

export default Main;
