import GeneralInfo from './generalInfo.jsx'
import EducationalInfo from './educationalInfo.jsx'
import ExperienceInfo from './experienceInfo.jsx'

import { useState } from 'react'

function CvPreview() {
    const [
        educationalInfo, setEducationalInfo] = useState({schoolName:"",shcoolTitle:"",schoolDate:""});


    function handleSubmitEdu(e) {
          setEducationalInfo(e)

      }

    return(
        <>
        <div>
            <GeneralInfo/>
            <EducationalInfo allInfoSubmit={handleSubmitEdu}/>
            <ExperienceInfo/>
        </div>
        <div>
        <p>{educationalInfo.schoolName}</p>
        <p>{educationalInfo.shcoolTitle}</p>
        <p>{educationalInfo.schoolDate}</p>
        </div>
        </>
    )
}

export default CvPreview