import EducationalInfo from './educationalInfo.jsx';

import { useState } from 'react';
import { produce } from 'immer';
import ExperienceInfo from './experienceInfo.jsx';

function CvPreview() {
  // educational information states
  const [educationalInfo, setEducationalInfo] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: '',
      schoolTitle: '',
      schoolDate: '',
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
          schoolDate: '',
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
  return (
    <>
      <div className="allInput">
        <div className="allEducationalInput">
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
                        } else if (name === 'schoolDate') {
                          v[index].schoolDate = value;
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
        </div>
        <div className="allExperienceInput">
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
            <button type="submit">Submit</button>
          </form>
          <button onClick={createExp}>create New Exp</button>
        </div>
      </div>

      <div>
        <h1>The CV</h1>

        <h2>Educational Information</h2>
        <ul>
          {infoEduSubmit.map((info) => {
            return (
              <li key={info.id}>
                {info.schoolName}, {info.schoolTitle}, {info.schoolDate}
              </li>
            );
          })}
        </ul>
        <h2>Experience Information</h2>
        <ul>
          {infoExpSubmit.map((info) => {
            return (
              <li key={info.id}>
                {info.companyName}, {info.companyTitle}, {info.companyStartDate}
                ,{info.companyEndDate}, {info.companyDescription}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default CvPreview;
