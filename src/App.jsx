import { useState } from "react";
import Aside from "./Aside";

const App = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    zip: "",
    email: "",
    password: "",
    pets: "",
    dev: false,
  });

  const [users, setUsers] = useState([]);

  function handleChange(event) {
    // console.log(event.target.id, event.target.value);
    setNewUser({ ...newUser, [event.target.id]: event.target.value });
  }

  function handleCheckboxChange(event) {
    setNewUser({ ...newUser, [event.target.id]: event.target.checked });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsers([newUser, ...users]);
    window.alert(`${newUser.firstName} ${newUser.lastName} has been created`);
    reset();
  }

  function reset() {
    setNewUser({
      firstName: "",
      lastName: "",
      zip: "",
      email: "",
      password: "",
      pets: "",
      dev: false,
    });
  }

  function removeUser(name) {
    // console.log("remove", name);

    const filteredUsers = users.filter((user) => name !== user.firstName);
    setUsers(filteredUsers);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">
            First name:
            {/*this is called a controlled input */}
            <input
              onChange={handleChange}
              value={newUser.firstName}
              type="text"
              id="firstName"
              name="firstName"
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
      <Aside removeUser={removeUser} users={users} />
    </div>
  );
};

export default App;
