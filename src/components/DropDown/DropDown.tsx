import { forwardRef } from 'react';

import styles from './dropDown.module.scss';
import type { IDropDownProps } from '../../types/types';
import { NavLink } from 'react-router-dom';

const DropDown = forwardRef<HTMLDivElement, IDropDownProps>((props, ref) => {
  const archiveTogler = props.isInActive ? props.delArchive : props.addArchive;

  return (
    <section ref={ref} className={styles.wrapper}>
      <ul>
        <li onClick={props.toggleMenu} className={styles.text}>
          <NavLink to={`/edit/${props.userId}`}>Редактировать</NavLink>
        </li>
        <li
          onClick={() => {
            props.toggleMenu();
            archiveTogler();
          }}
          className={styles.text}
        >
          {props.isInActive ? 'Активировать' : 'Архивировать'}
        </li>
        <li
          onClick={() => {
            props.toggleMenu();
            props.delActive();
          }}
          className={styles.text}
        >
          Скрыть
        </li>
      </ul>
    </section>
  );
});

export default DropDown;
