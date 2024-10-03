import type { ReactElement } from 'react';

import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/mainImage.jpg';
import like from '../../assets/images/like.svg';
import call from '../../assets/images/call.svg';

import styles from './header.module.scss';

const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <section className={styles.wrapper}>
        <div className={styles.logo_wrapper}>
          <img src={logo} className={styles.logo} alt="logo" />
          <span>
            <span className={styles.logo_title_part1}>at-</span>
            <span className={styles.logo_title_part2}>work</span>
          </span>
        </div>
        <div className={styles.right_block_wrapper}>
          <div className={styles.user_btns_wrapper}>
            <img src={like} alt="like" />
            <img src={call} alt="call" />
          </div>
          <div className={styles.user_wrapper}>
            <div className={styles.ava_wrapper}>
              <img className={styles.avatar} src={avatar} alt="avatar" />
            </div>
            <span className={styles.user_name}>Ivan1234</span>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
