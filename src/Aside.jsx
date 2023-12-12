const Aside = ({ users, removeUser }) => {
  return (
    <aside>
      <h1>Users</h1>
      <ul>
        {users.length > 0 &&
          users.map((user) => (
            <li onClick={() => removeUser(user.firstName)} key={user.firstName}>
              {user.firstName} {user.lastName}
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default Aside;
