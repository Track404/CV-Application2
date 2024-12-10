/* eslint-disable react/prop-types */

function ExperienceInfo({ changeInfo, value, remove }) {
  return (
    <>
      <label>
        CompanyName:
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={value.companyName}
          onChange={changeInfo}
        />
      </label>

      <label>
        Title:
        <input
          type="text"
          name="companyTitle"
          id="titlejob"
          value={value.companyTitle}
          onChange={changeInfo}
        />
      </label>

      <label>
        Start Date:
        <input
          type="date"
          name="companyStartDate"
          id="dateJobStart"
          value={value.companyStartDate}
          onChange={changeInfo}
        />
      </label>

      <label>
        End Date:
        <input
          type="date"
          name="companyEndDate"
          id="dateJobEnd"
          value={value.companyEndDate}
          onChange={changeInfo}
        />
      </label>

      <label>
        Description:
        <textarea
          name="companyDescription"
          id="descriptionJob"
          value={value.companyDescription}
          onChange={changeInfo}
        ></textarea>
      </label>

      <button onClick={remove}>X</button>
    </>
  );
}

export default ExperienceInfo;
