import GeneralInfo from './generalInfo.jsx';
import EducationalInfo from './educationalInfo.jsx';
import ExperienceInfo from './experienceInfo.jsx';

import { useState } from 'react';

function CvPreview() {
  const [educationalInfo, setEducationalInfo] = useState({
    schoolName: '',
    shcoolTitle: '',
    schoolDate: '',
  });

  const [experienceInformation, setExperienceInformation] = useState({
    companyName: '',
    companyTitle: '',
    companyStartDate: '',
    companyEndDate: '',
    companyDescription: '',
  });

  const [generalInformation, setGeneralInformation] = useState({
    name: '',
    email: '',
    tel: '',
  });

  function handleSubmitEdu(e) {
    setEducationalInfo(e);
  }

  function handleSubmitExp(e) {
    setExperienceInformation(e);
  }

  function handleSubmitGeneral(e) {
    setGeneralInformation(e);
  }

  return (
    <>
      <div>
        <GeneralInfo allInfoSubmit={handleSubmitGeneral} />
        <EducationalInfo allInfoSubmit={handleSubmitEdu} />
        <ExperienceInfo allInfoSubmit={handleSubmitExp} />
      </div>
      <div>
        <h1>The CV</h1>
        <div>
          <h2>General Information</h2>
          <p>{generalInformation.name}</p>
          <p>{generalInformation.email}</p>
          <p>{generalInformation.tel}</p>
        </div>
        <div>
          <h2>Experience Information</h2>
          <p>{experienceInformation.companyName}</p>
          <p>{experienceInformation.companyTitle}</p>
          <p>{experienceInformation.companyStartDate}</p>
          <p>{experienceInformation.companyEndDate}</p>
          <p>{experienceInformation.companyDescription}</p>
        </div>
        <div>
          <h2>Educational Information</h2>
          <p>{educationalInfo.schoolName}</p>
          <p>{educationalInfo.shcoolTitle}</p>
          <p>{educationalInfo.schoolDate}</p>
        </div>
      </div>
    </>
  );
}

export default CvPreview;
