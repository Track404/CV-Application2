/* eslint-disable react/prop-types */

function EducationalInfo({ changeInfo, value, remove }) {
  return (
    <>
      <label>
        SchoolName:
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          value={value.schoolName}
          onChange={changeInfo}
        />
      </label>

      <label>
        Title:
        <input
          type="text"
          name="schoolTitle"
          id="title"
          value={value.schoolTitle}
          onChange={changeInfo}
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          name="schoolDate"
          id="EduName"
          value={value.schoolDate}
          onChange={changeInfo}
        />
      </label>
      <button onClick={remove}>X</button>
    </>
  );
}

export default EducationalInfo;
