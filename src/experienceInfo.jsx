import { useState } from "react";

function ExperienceInfo() {
    const [
        experienceInformation, setExperienceInformation] = useState({companyName:"",title:"",startDate:"",endDate:"",description:""});
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
              <input type="text" name="titlejob" id="titlejob" value={experienceInformation.title} onChange={e => setExperienceInformation({...experienceInformation,title:e.target.value})}/>
            </label>
            
            <label >
              Start Date:
              <input type="date" name="dateJobStart" id="dateJobStart"value={experienceInformation.startDate} onChange={e => setExperienceInformation({...experienceInformation,startDate:e.target.value})}/>
            </label>

            <label >
              End Date:
              <input type="date" name="dateJobEnd" id="dateJobEnd" value={experienceInformation.endDate} onChange={e => setExperienceInformation({...experienceInformation,endDate:e.target.value})}/>
            </label>

            <label >
              Description:
              <textarea name="descriptionJob" id="descriptionJob" value={experienceInformation.description} onChange={e => setExperienceInformation({...experienceInformation,description:e.target.value})}></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </>
    )
  }
  
  export default ExperienceInfo