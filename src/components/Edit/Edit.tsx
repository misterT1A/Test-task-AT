import { type ReactElement, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { useAppDispatch } from '@/hooks/storeHooks';
import { deleteAllActive } from '@/store/activeUsers';
import { useGetUserQuery } from '@/store/apiSlice';
import { deleteAllArchives } from '@/store/archiveUsers';

import Loader from '../../ui/Loader/Loader';
import Modal from '../Modal/Modal';
import styles from './edit.module.scss';
import EditForm from './EditForm/EditForm';
import EditHeader from './EditHeader/EditHeader';

const Edit = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { usertId } = useParams();
  const { data } = useGetUserQuery(usertId || '');
  const [modalActive, setModalActive] = useState(false);

  const clearState = (): void => {
    dispatch(deleteAllArchives());
    dispatch(deleteAllActive());
  };

  return (
    <main className={styles.main}>
      <NavLink to={'/'} className={styles.back_button} onClick={clearState}>
        <div className={styles.back_img}></div>
        <span className={styles.back_text}>Назад</span>
      </NavLink>
      {!data && <Loader />}
      {data && (
        <article className={styles.wrapper}>
          <EditHeader />
          {usertId && <EditForm user={data} modalHandler={setModalActive} />}
        </article>
      )}
      {modalActive && <Modal setActive={setModalActive} />}
    </main>
  );
};

export default Edit;
