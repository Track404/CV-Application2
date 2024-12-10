/* eslint-disable react/prop-types */

function GeneralInfo({ changeInfo, value }) {
  return (
    <>
      <label>
        Name:
        <input
          type="text"
          name="name"
          id="name"
          value={value.name}
          onChange={changeInfo}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          id="email"
          value={value.email}
          onChange={changeInfo}
        />
      </label>

      <label>
        Phone Number:
        <input
          type="tel"
          name="tel"
          id="phone"
          value={value.tel}
          onChange={changeInfo}
        />
      </label>
    </>
  );
}

export default GeneralInfo;
