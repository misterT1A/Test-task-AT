import { forwardRef } from 'react';

import styles from './dropDown.module.scss';
import type { IDropDownProps } from '../../types/types';

const list = ['Редактировать', 'Архивировать', 'Скрыть'];

const DropDown = forwardRef<HTMLDivElement, IDropDownProps>((props, ref) => {
  return (
    <section ref={ref} className={styles.wrapper}>
      <ul>
        {list.map((elem) => (
          <li onClick={props.toggleMenu} className={styles.text} key={elem}>
            {elem}
          </li>
        ))}
      </ul>
    </section>
  );
});

export default DropDown;
