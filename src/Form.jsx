import { useState } from "react";

const Form = ({ handleSubmit }) => {
  // only this component cares about the newUser state so it does not need to be in App.jsx
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    zip: "",
    email: "",
    password: "",
    pets: "",
    dev: false,
  });

  // these functions are only used in this component so they don't need to be in App.jsx
  function handleChange(event) {
    // console.log(event.target.id, event.target.value);
    setNewUser({ ...newUser, [event.target.id]: event.target.value });
  }

  function handleCheckboxChange(event) {
    setNewUser({ ...newUser, [event.target.id]: event.target.checked });
  }

  return (
    <div className="container">
      {/* handleSubmit must now pass the event and the new User as arguments */}
      <form onSubmit={(e) => handleSubmit(e, newUser)}>
        <label htmlFor="firstName">
          First name:
          {/*this is called a controlled input */}
          <input
            onChange={handleChange}
            value={newUser.firstName}
            type="text"
            id="firstName"
            name="firstName"
            required
          />
        </label>
        <label htmlFor="lastName">
          Last name:
          <input
            onChange={handleChange}
            value={newUser.lastName}
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </label>
        <label htmlFor="zip">
          Zip code:
          <input
            onChange={handleChange}
            value={newUser.zip}
            type="text"
            id="zip"
            name="zip"
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            onChange={handleChange}
            value={newUser.email}
            type="email"
            id="email"
            name="email"
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            onChange={handleChange}
            value={newUser.password}
            type="password"
            id="password"
            name="password"
            required
          />
        </label>
        <label htmlFor="pets">
          Pets
          <select
            onChange={handleChange}
            value={newUser.pets}
            id="pets"
            name="pets"
          >
            <option value=""></option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </label>
        <label htmlFor="dev">
          Developer
          <input
            checked={newUser.dev}
            onChange={handleCheckboxChange}
            type="checkbox"
            id="dev"
            name="dev"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
