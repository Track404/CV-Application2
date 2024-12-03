import { useState } from "react";

function EducationalInfo() {
    const [
        educationalInfo, setEducationalInfo] = useState({schoolName:"",title:"",date:""});
    function handleSubmit(e) {
      e.preventDefault();
        alert(`You said your name is${educationalInfo.schoolName}, your email is ${educationalInfo.title} and your phone number is ${educationalInfo.date} `)
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
              <input type="text" name="Title" id="title" value={educationalInfo.title} onChange={e => setEducationalInfo({...educationalInfo,title:e.target.value})}/>
            </label>
            
            <label >
              Date:
              <input type="date" name="EduName" id="EduName" value={educationalInfo.date} onChange={e => setEducationalInfo({...educationalInfo,date:e.target.value})}/>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </>
    )
  }
  
  export default EducationalInfo