import type { ReactElement } from 'react';

import Header from '../../components/Header/Header';

import { Outlet } from 'react-router-dom';

const Root = (): ReactElement => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
