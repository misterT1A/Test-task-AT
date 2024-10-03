import { type ReactElement, useState } from 'react';

import type { IUsersList } from '../../types/types';
import UserItem from '../UserItem/UserItem';
import styles from './userList.module.scss';

const UsersList = ({ users, isInActive }: IUsersList): ReactElement => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleMenu = (index: number): void => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        {users.map((user, index) => (
          <UserItem
            key={user.id}
            user={user}
            isOpen={openIndex === index}
            toggleMenu={() => toggleMenu(index)}
            isInActive={isInActive}
          />
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
