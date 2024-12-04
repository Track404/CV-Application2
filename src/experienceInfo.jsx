import { useState } from "react";

function ExperienceInfo() {
    const [
        experienceInformation, setExperienceInformation] = useState({companyName:"",companyTitle:"",companyStartDate:"",companyEndDate:"",companyDescription:""});
    function handleSubmit(e) {
      e.preventDefault();
        alert(`You said your name is${experienceInformation.companyName}, your email is ${experienceInformation.title} and your phone number is ${experienceInformation.startDate} `)
    }

    return (
      <>
        <div className='experienceInfo'>
          <form onSubmit={handleSubmit}>
            <label >
              CompanyName:
              <input type="text" name="companyName" id="companyName" value={experienceInformation.companyName} onChange={e => setExperienceInformation({...experienceInformation,companyName:e.target.value})}/>
            </label>
            
            <label >
              Title:
              <input type="text" name="titlejob" id="titlejob" value={experienceInformation.companyTitle} onChange={e => setExperienceInformation({...experienceInformation,companyTitle:e.target.value})}/>
            </label>
            
            <label >
              Start Date:
              <input type="date" name="dateJobStart" id="dateJobStart"value={experienceInformation.companyStartDate} onChange={e => setExperienceInformation({...experienceInformation,companyStartDate:e.target.value})}/>
            </label>

            <label >
              End Date:
              <input type="date" name="dateJobEnd" id="dateJobEnd" value={experienceInformation.companyEndDate} onChange={e => setExperienceInformation({...experienceInformation,companyEndDate:e.target.value})}/>
            </label>

            <label >
              Description:
              <textarea name="descriptionJob" id="descriptionJob" value={experienceInformation.companyDescription} onChange={e => setExperienceInformation({...experienceInformation,companyDescription:e.target.value})}></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </>
    )
  }
  
  export default ExperienceInfo