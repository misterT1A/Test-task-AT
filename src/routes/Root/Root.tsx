import type { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header/Header';

const Root = (): ReactElement => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
