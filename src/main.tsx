import './index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Edit from './components/Edit/Edit';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Main from './components/Main/Main';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Root from './routes/Root/Root';
import store from './store/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/edit/:usertId',
        element: <Edit />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
