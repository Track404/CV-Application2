/* eslint-disable react/prop-types */

function GeneralInfo({ changeInfo, value }) {
  return (
    <>
      <div className="inputLabel">
        <label htmlFor="name">Name</label>

        <input
          type="text"
          name="name"
          id="name"
          value={value.name}
          onChange={changeInfo}
        />
      </div>
      <div className="inputLabel">
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={value.job}
          onChange={changeInfo}
        />
      </div>
      <div className="inputLabel">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={value.email}
          onChange={changeInfo}
        />
      </div>
      <div className="inputLabel">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={value.tel}
          onChange={changeInfo}
        />
      </div>
      <div className="inputLabel">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={value.location}
          onChange={changeInfo}
        />
      </div>
      <div className="inputLabel">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          value={value.description}
          onChange={changeInfo}
        />
      </div>
    </>
  );
}

export default GeneralInfo;
