import { useState, type ReactElement } from 'react';
import { useGetUsersQuery } from '../../store/apiSlice';

import styles from './userList.module.scss';
import UserItem from '../UserItem/UserItem';

const UsersList = (): ReactElement => {
  const { data } = useGetUsersQuery(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleMenu = (index: number): void => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        {data &&
          data.map((users, index) => (
            <UserItem
              key={users.id}
              userName={users.name}
              cityName={users.address.city}
              companyName={users.company.name}
              isOpen={openIndex === index}
              toggleMenu={() => toggleMenu(index)}
            />
          ))}
      </ul>
    </section>
  );
};

export default UsersList;
