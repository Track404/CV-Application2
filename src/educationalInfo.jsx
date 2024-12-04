/* eslint-disable react/prop-types */
import { useState } from "react";

function EducationalInfo({allInfoSubmit}) {
    const [
        educationalInfo, setEducationalInfo] = useState({schoolName:"",shcoolTitle:"",schoolDate:""});
        
        function handleSubmit(e) {
            e.preventDefault();
            
            allInfoSubmit(educationalInfo)
          }
    
    return (
      <>
        <div className='educationalInfo'>
          <form onSubmit={handleSubmit}>
            <label >
              SchoolName:
              <input type="text" name="schoolName" id="schoolName" value={educationalInfo.schoolName} onChange={e => setEducationalInfo({...educationalInfo,schoolName:e.target.value})}/>
            </label>
            
            <label >
              Title:
              <input type="text" name="Title" id="title" value={educationalInfo.shcoolTitle} onChange={e => setEducationalInfo({...educationalInfo,shcoolTitle:e.target.value})}/>
            </label>
            
            <label >
              Date:
              <input type="date" name="EduName" id="EduName" value={educationalInfo.schoolDate} onChange={e => setEducationalInfo({...educationalInfo,schoolDate:e.target.value})}/>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </>
    )
  }
  
  export default EducationalInfo