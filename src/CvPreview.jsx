import EducationalInfo from './educationalInfo.jsx';

import { useState } from 'react';
import { produce } from 'immer';

import ExperienceInfo from './experienceInfo.jsx';
import GeneralInfo from './generalInfo.jsx';
import CvDisplay from './DisplayCV.jsx';

function CvPreview() {
  // general information states
  const [generalInformation, setGeneralInformation] = useState({
    id: crypto.randomUUID(),
    name: '',
    job: '',
    email: '',
    phone: '',
    location: '',
    description: '',
  });

  const [infoGeneralSubmit, setinfoGeneralSubmit] =
    useState(generalInformation);
  // educational information states
  const [educationalInfo, setEducationalInfo] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: '',
      schoolTitle: '',
      schoolDateStart: '',
      schoolDateEnd: '',
    },
  ]);

  const [infoEduSubmit, setInfoEduSubmit] = useState(educationalInfo);

  // experience information states
  const [experienceInformation, setExperienceInformation] = useState([
    {
      id: crypto.randomUUID(),
      companyName: '',
      companyTitle: '',
      companyStartDate: '',
      companyEndDate: '',
      companyDescription: '',
    },
  ]);
  // make only one component open
  const [isActive, setIsActive] = useState(0);

  const [infoExpSubmit, setInfoExpSubmit] = useState(educationalInfo);
  // educational utilites function
  function handleSubmitEdu(e) {
    e.preventDefault();
    setInfoEduSubmit(educationalInfo);
  }

  function createEdu() {
    if (educationalInfo.length < 3) {
      setEducationalInfo([
        ...educationalInfo,
        {
          id: crypto.randomUUID(),
          schoolName: '',
          schoolTitle: '',
          schoolDateStart: '',
          schoolDateEnd: '',
        },
      ]);
    }
  }

  // experience Utilites function
  function handleSubmitExp(e) {
    e.preventDefault();
    setInfoExpSubmit(experienceInformation);
  }

  function createExp() {
    if (experienceInformation.length < 3) {
      setExperienceInformation([
        ...experienceInformation,
        {
          id: crypto.randomUUID(),
          companyName: '',
          companyTitle: '',
          companyStartDate: '',
          companyEndDate: '',
          companyDescription: '',
        },
      ]);
    }
  }

  // general Utilites function
  function handleSubmitGeneral(e) {
    e.preventDefault();
    setinfoGeneralSubmit(generalInformation);
  }

  function showDialog() {
    alert('Create Your CV Now By Track404 !');
  }
  return (
    <>
      <div className="container">
        <div className="leftPage">
          <div className="pageTitle">
            <h1>CV Gen</h1>
            <button onClick={showDialog}>About</button>
          </div>
          <div className="allInput">
            <div className="allGeneralInput">
              {isActive === 0 ? (
                <>
                  <form onSubmit={handleSubmitGeneral}>
                    <GeneralInfo
                      key={generalInformation.id}
                      value={generalInformation}
                      changeInfo={(e) => {
                        const name = e.target.name;
                        const value = e.target.value;
                        setGeneralInformation({
                          ...generalInformation,
                          [name]: value,
                        });
                      }}
                    />
                    <button type="submit">Submit</button>
                  </form>
                </>
              ) : (
                <>
                  <div className="inputShow">
                    <h2>General Information</h2>
                    <button onClick={() => setIsActive(0)}>»</button>
                  </div>
                </>
              )}
            </div>
            <div className="allEducationalInput">
              {isActive === 1 ? (
                <>
                  <form onSubmit={handleSubmitEdu}>
                    {educationalInfo.map((p, index) => {
                      return (
                        <EducationalInfo
                          value={p}
                          key={p.id}
                          remove={() => {
                            setEducationalInfo((currentInfo) =>
                              currentInfo.filter((x) => x.id !== p.id)
                            );
                          }}
                          changeInfo={(e) => {
                            const name = e.target.name;
                            const value = e.target.value;
                            setEducationalInfo((currentInfo) =>
                              produce(currentInfo, (v) => {
                                if (name === 'schoolName') {
                                  v[index].schoolName = value;
                                } else if (name === 'schoolTitle') {
                                  v[index].schoolTitle = value;
                                } else if (name === 'schoolDateStart') {
                                  v[index].schoolDateStart = value;
                                } else if (name === 'schoolDateEnd') {
                                  v[index].schoolDateEnd = value;
                                }
                              })
                            );
                          }}
                        />
                      );
                    })}
                    <button type="submit">Submit</button>
                  </form>
                  <button onClick={createEdu}>create New Edu</button>
                </>
              ) : (
                <div className="inputShow">
                  <h2>Educational Information</h2>
                  <button onClick={() => setIsActive(1)}>»</button>
                </div>
              )}
            </div>
            <div className="allExperienceInput">
              {isActive === 2 ? (
                <>
                  <form onSubmit={handleSubmitExp}>
                    {experienceInformation.map((p, index) => {
                      return (
                        <ExperienceInfo
                          value={p}
                          key={p.id}
                          remove={() => {
                            setExperienceInformation((currentInfo) =>
                              currentInfo.filter((x) => x.id !== p.id)
                            );
                          }}
                          changeInfo={(e) => {
                            const name = e.target.name;
                            const value = e.target.value;
                            setExperienceInformation((currentInfo) =>
                              produce(currentInfo, (v) => {
                                switch (name) {
                                  case 'companyName':
                                    v[index].companyName = value;
                                    break;
                                  case 'companyTitle':
                                    v[index].companyTitle = value;
                                    break;
                                  case 'companyStartDate':
                                    v[index].companyStartDate = value;
                                    break;
                                  case 'companyEndDate':
                                    v[index].companyEndDate = value;
                                    break;
                                  case 'companyDescription':
                                    v[index].companyDescription = value;
                                    break;
                                }
                              })
                            );
                          }}
                        />
                      );
                    })}
                    <div>
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                  <button onClick={createExp}>create New Exp</button>
                </>
              ) : (
                <div className="inputShow">
                  <h2>Experience Information</h2>
                  <button onClick={() => setIsActive(2)}>»</button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="cvPreview">
          <CvDisplay
            general={infoGeneralSubmit}
            educational={infoEduSubmit}
            experience={infoExpSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default CvPreview;
