
import './App.css'

function GeneralInfo() {
  

  return (
    <>
      <div className='generalInfo'>
        <form action="">
          <label >
            Name:
            <input type="text" name="name" id="name" />
          </label>
          
          <label >
            Email:
            <input type="email" name="email" id="email" />
          </label>
          
          <label >
            Phone Number:
            <input type="tel" name="phone" id="phone" />
          </label>
          
        </form>
      </div>
    </>
  )
}

export default GeneralInfo
