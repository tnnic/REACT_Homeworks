import React from "react";
import type { IUsers, IUser } from "../App";
export const UsersMap = ({users}: IUsers) => {
  return (
    <>
      {users.map((user: IUser) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </>
  )
}
