import { type ReactElement, useEffect } from 'react';

import close from '../../assets/images/close-img.svg';
import logo from '../../assets/images/modal-img.svg';
import type { IModalProps } from '../../types/types';
import styles from './modal.module.scss';

const Modal = ({ setActive }: IModalProps): ReactElement => {
  useEffect(() => {
    const timer = setTimeout(() => setActive(false), 4000);
    document.body.style.overflow = 'hidden';
    return (): void => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [setActive]);

  return (
    <section className={styles.wrapper} onClick={() => setActive(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close_button} onClick={() => setActive(false)}>
          <img src={close} alt="close" />
        </button>
        <img className={styles.logo} src={logo} alt="success" />
        <span className={styles.text}>Изменения сохранены!</span>
      </div>
    </section>
  );
};

export default Modal;
