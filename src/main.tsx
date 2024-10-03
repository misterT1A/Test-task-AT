import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import Root from './routes/Root/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { Provider } from 'react-redux';
import store from './store/store';
import Main from './components/Main/Main';

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
      // {
      //   path: '/edit/:id',
      //   element: <Edit />,
      // },
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
