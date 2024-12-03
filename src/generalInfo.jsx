import { useState } from 'react';
import './App.css'

function GeneralInfo() {

  const [generalInformation, setGeneralInformation] = useState({name:"",email:"",tel:""});
  function handleSubmit(e) {
    e.preventDefault();
      alert(`You said your name is${generalInformation.name}, your email is ${generalInformation.email} and your phone number is ${generalInformation.tel} `)
  }

  return (
    <>
      <div className='generalInfo'>
        <form onSubmit={handleSubmit}>
          <label >
            Name:
            <input type="text" name="name" id="name" value={generalInformation.name} onChange={e => setGeneralInformation({...generalInformation,name:e.target.value})}/>
          </label>
          
          <label >
            Email:
            <input type="email" name="email" id="email" value={generalInformation.email} onChange={e => setGeneralInformation({...generalInformation,email:e.target.value})}/>
          </label>
          
          <label >
            Phone Number:
            <input type="tel" name="phone" id="phone" value={generalInformation.tel} onChange={e => setGeneralInformation({...generalInformation,tel:e.target.value})}/>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  )
}

export default GeneralInfo
