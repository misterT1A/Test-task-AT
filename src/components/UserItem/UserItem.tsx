import classNames from 'classnames';
import { type ReactElement, useEffect, useRef } from 'react';

import ava from '@/assets/images/mainImage.jpg';
import { useAppDispatch } from '@/hooks/storeHooks';
import { addActive, deleteActive } from '@/store/activeUsers';
import { addArchive, deleteArchive } from '@/store/archiveUsers';
import type { IUserItemProps } from '@/types/types';

import DropDown from '../DropDown/DropDown';
import styles from './userItem.module.scss';

const UserItem = ({ user, isOpen, toggleMenu, isInActive }: IUserItemProps): ReactElement => {
  const dispatch = useAppDispatch();

  const shortUserName = user.name.split(' ')[1];
  const shortCompName = user.company.name.split('-')[0];

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

  const avatarClass = classNames({
    [styles.avatar]: !isInActive,
    [styles.avatar_inActive]: isInActive,
  });

  const nameClass = classNames({
    [styles.user_name]: !isInActive,
    [styles.user_name_inActive]: isInActive,
  });

  const moveToArchive = (): void => {
    dispatch(addArchive(user));
    dispatch(deleteActive(user));
  };

  const moveFromArchive = (): void => {
    dispatch(deleteArchive(user));
    dispatch(addActive(user));
  };

  const deleteFromActive = (): void => {
    dispatch(deleteActive(user));
  };
  const deleteFromArchive = (): void => {
    dispatch(deleteArchive(user));
  };

  return (
    <li className={styles.wrapper}>
      <div className={styles.avatar_wrapper}>
        <img className={avatarClass} src={ava} alt="avatar" />
      </div>
      <div className={styles.description_wrapper}>
        <div className={styles.wrapper_userInfo}>
          <span className={nameClass}>{shortUserName}</span>
          <span className={styles.company_name}>{shortCompName}</span>
        </div>
        <span className={styles.city_name}>{user.address.city}</span>
        <button
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            toggleMenu();
          }}
          className={styles.button}
        ></button>
        {isOpen && (
          <DropDown
            ref={menuRef}
            userId={user.id}
            toggleMenu={toggleMenu}
            isInActive={isInActive}
            moveFromArchive={moveFromArchive}
            moveToArchive={moveToArchive}
            delActive={deleteFromActive}
            delArchive={deleteFromArchive}
          />
        )}
      </div>
    </li>
  );
};

export default UserItem;
