import { useState } from "react";
import Aside from "./Aside";
import Form from "./Form";

const App = () => {
  // both the Form.jsx and the Aside.jsx use this state so you must keep it in the parent component
  const [users, setUsers] = useState([]);

  // This functions changes the state that lives in App.jsx. So it must live here and be passed as a prop to the Form component
  function handleSubmit(e, newUser) {
    // handleSubmit 'may' need the event argument passed as an argument to prevent the page refresh
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
