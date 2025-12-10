import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";

export default function UsersList() {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => {
    console.log(state.users);
    return state.users;
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading users...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div style={{ padding: 16 }}>
      <h3>Users</h3>
      <ul>
        {list.map((u) => (
          <li key={u.id}>
            {u.name} — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
