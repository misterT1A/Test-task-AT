import type { ReactElement } from 'react';

import styles from './loader.module.scss';

const Loader = (): ReactElement => {
  return <span className={styles.loader}></span>;
};

export default Loader;
