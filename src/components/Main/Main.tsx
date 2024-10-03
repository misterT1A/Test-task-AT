import { type ReactElement } from 'react';

import { useAppSelector } from '@/hooks/storeHooks';
import useGetUsers from '@/hooks/useGetUsers';
import Loader from '@/ui/Loader/Loader';

import UsersList from '../UsersList/UsersList';
import styles from './main.module.scss';

const Main = (): ReactElement => {
  useGetUsers();

  const { activeUsers } = useAppSelector((state) => state.activeUsers);
  const { archiveUsers } = useAppSelector((state) => state.archiveUsers);

  return (
    <main className={styles.main}>
      <article className={styles.wrapper}>
        {(!activeUsers.length || !archiveUsers) && <Loader />}
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
