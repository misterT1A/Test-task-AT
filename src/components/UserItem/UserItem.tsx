import { useEffect, useRef, type ReactElement } from 'react';

import styles from './userItem.module.scss';
import ava from '../../assets/images/mainImage.jpg';

import type { IUserItemProps } from '../../types/types';
import DropDown from '../DropDown/DropDown';

const UserItem = ({ userName, cityName, companyName, isOpen, toggleMenu }: IUserItemProps): ReactElement => {
  const shortUserName = userName.split(' ')[1];
  const shortCompName = companyName.split('-')[0];

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target as HTMLElement)) {
        toggleMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return (): void => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <li className={styles.wrapper}>
      <div className={styles.avatar_wrapper}>
        <img className={styles.avatar} src={ava} alt="avatar" />
      </div>
      <div className={styles.description_wrapper}>
        <div className={styles.wrapper_userInfo}>
          <span className={styles.user_name}>{shortUserName}</span>
          <span className={styles.city_name}>{shortCompName}</span>
        </div>
        <span className={styles.company_name}>{cityName}</span>
        <button
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            toggleMenu();
          }}
          className={styles.button}
        ></button>
        {isOpen && <DropDown ref={menuRef} toggleMenu={toggleMenu} />}
      </div>
    </li>
  );
};

export default UserItem;
