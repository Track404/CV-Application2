import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GeneralInfo from './generalInfo.jsx'
import EducationalInfo from './educationalInfo.jsx'
import ExperienceInfo from './experienceInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo />
    <EducationalInfo/>
    <ExperienceInfo/>
    
    
  </StrictMode>,
)
