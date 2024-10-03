import type { ReactElement } from 'react';

import image from '@/assets/images/mainImage.jpg';

import styles from './editHeader.module.scss';

const EditHeader = (): ReactElement => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.image_wrapepr}>
        <img className={styles.image} src={image} alt="image" />
      </div>
      <ul className={styles.list}>
        <li className={styles.list_item}>Данные профиля</li>
        <li className={styles.list_item}>Рабочее пространство</li>
        <li className={styles.list_item}>Приватность</li>
        <li className={styles.list_item}>Безопасность</li>
      </ul>
    </section>
  );
};

export default EditHeader;
