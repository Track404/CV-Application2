import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CvPreview from './CvPreview.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CvPreview />
  </StrictMode>
);
