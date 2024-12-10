import EducationalInfo from './educationalInfo.jsx';

import { useState } from 'react';
import { produce } from 'immer';

function CvPreview() {
  const [educationalInfo, setEducationalInfo] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: '',
      schoolTitle: '',
      schoolDate: '',
    },
  ]);

  const [infoEduSubmit, setInfoEduSubmit] = useState(educationalInfo);

  function handleSubmit(e) {
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

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
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
      </div>
    </>
  );
}

export default CvPreview;
