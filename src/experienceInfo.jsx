function ExperienceInfo() {
  

    return (
      <>
        <div className='experienceInfo'>
          <form >
            <label >
              CompanyName:
              <input type="text" name="companyName" id="companyName" />
            </label>
            
            <label >
              Title:
              <input type="text" name="titlejob" id="titlejob" />
            </label>
            
            <label >
              Start Date:
              <input type="date" name="dateJobStart" id="dateJobStart" />
            </label>

            <label >
              End Date:
              <input type="date" name="dateJobEnd" id="dateJobEnd" />
            </label>

            <label >
              Description:
              <textarea name="descriptionJob" id="descriptionJob"></textarea>
            </label>
            
          </form>
        </div>
      </>
    )
  }
  
  export default ExperienceInfo