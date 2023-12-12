import { useState } from "react";
import Aside from "./Aside";
import Form from "./Form";

const App = () => {
  const [users, setUsers] = useState([]);

  function handleSubmit(e, newUser) {
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
      <Form handleSubmit={handleSubmit} />
      <Aside removeUser={removeUser} users={users} />
    </div>
  );
};

export default App;
