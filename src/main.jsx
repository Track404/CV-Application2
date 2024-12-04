import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CvPreview from './CvPreview.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CvPreview />
  </StrictMode>
);
