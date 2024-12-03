function educationalInfo() {
  

    return (
      <>
        <div className='educationalInfo'>
          <form >
            <label >
              SchoolName:
              <input type="text" name="schoolName" id="schoolName" />
            </label>
            
            <label >
              Title :
              <input type="text" name="Title" id="title" />
            </label>
            
            <label >
              Date
              <input type="date" name="EduName" id="EduName" />
            </label>
            
          </form>
        </div>
      </>
    )
  }
  
  export default educationalInfo