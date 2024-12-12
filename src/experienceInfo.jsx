/* eslint-disable react/prop-types */

function ExperienceInfo({ changeInfo, value, remove }) {
  return (
    <>
      <div className="inputLabel">
        <label htmlFor="companyName">CompanyName</label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={value.companyName}
          onChange={changeInfo}
        />
      </div>
      <div className="inputLabel">
        <label htmlFor="titleJob">Title</label>
        <input
          type="text"
          name="companyTitle"
          id="titlejob"
          value={value.companyTitle}
          onChange={changeInfo}
        />
      </div>
      <div className="inputLabel">
        <label htmlFor="dateJobStart">Start Date</label>
        <input
          type="month"
          name="companyStartDate"
          id="dateJobStart"
          max={value.companyEndDate}
          value={value.companyStartDate}
          onChange={changeInfo}
        />
      </div>
      <div className="inputLabel">
        <label htmlFor="dateJobEndDate">End Date</label>
        <input
          type="month"
          name="companyEndDate"
          id="dateJobEnd"
          min={value.companyStartDate}
          value={value.companyEndDate}
          onChange={changeInfo}
        />
      </div>
      <div className="inputLabel">
        <label htmlFor="descriptionJob">Description</label>
        <textarea
          name="companyDescription"
          id="descriptionJob"
          value={value.companyDescription}
          onChange={changeInfo}
        ></textarea>
      </div>

      <button onClick={remove}>X</button>
    </>
  );
}

export default ExperienceInfo;
