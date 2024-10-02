import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import Root from './routes/Root/Root';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
