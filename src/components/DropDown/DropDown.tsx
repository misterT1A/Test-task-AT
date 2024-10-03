import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

import type { IDropDownProps } from '@/types/types';

import styles from './dropDown.module.scss';

const DropDown = forwardRef<HTMLDivElement, IDropDownProps>((props, ref) => {
  const archiveTogler = props.isInActive ? props.moveFromArchive : props.moveToArchive;

  const deleteTogler = props.isInActive ? props.delArchive : props.delActive;

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
            deleteTogler();
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
