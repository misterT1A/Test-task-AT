import { type ReactElement, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { useGetUserQuery } from '../../store/apiSlice';
import Loader from '../../ui/Loader/Loader';
import Modal from '../Modal/Modal';
import styles from './edit.module.scss';
import EditForm from './EditForm/EditForm';
import EditHeader from './EditHeader/EditHeader';

const Edit = (): ReactElement => {
  const { usertId } = useParams();
  const { data } = useGetUserQuery(usertId || '');
  const [modalActive, setModalActive] = useState(false);

  return (
    <main className={styles.main}>
      <NavLink to={'/'} className={styles.back_button}>
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
