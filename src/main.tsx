import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import Root from './routes/Root/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: 'planets/:productId',
    //     element: <DetailedBlock />,
    //   },
    // ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
