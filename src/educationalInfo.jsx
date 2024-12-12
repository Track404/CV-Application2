/* eslint-disable react/prop-types */

function EducationalInfo({ changeInfo, value, remove }) {
  return (
    <>
      <div className="inputLabel">
        <label htmlFor="schoolName">SchoolName</label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          value={value.schoolName}
          onChange={changeInfo}
        />
      </div>
      <div className="inputLabel">
        <label htmlFor="shcoolTitle">Title</label>
        <input
          type="text"
          name="schoolTitle"
          id="schoolTitle"
          value={value.schoolTitle}
          onChange={changeInfo}
        />
      </div>
      <div className="inputLabel">
        <label htmlFor="schoolDateStart">Date Start</label>
        <input
          type="month"
          name="schoolDateStart"
          id="schoolDateStart"
          max={value.schoolDateEnd}
          value={value.schoolDateStart}
          onChange={changeInfo}
        />
      </div>
      <div className="inputLabel">
        <label htmlFor="schoolDateEnd">Date End</label>
        <input
          type="month"
          name="schoolDateEnd"
          id="schoolDateEnd"
          min={value.schoolDateStart}
          value={value.schoolDateEnd}
          onChange={changeInfo}
        />
      </div>

      <button onClick={remove}>X</button>
    </>
  );
}

export default EducationalInfo;
