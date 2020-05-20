import React, { useContext } from "react";
import { UserContext } from "./SearchUser";

function UserList() {                     //child2
  const name = useContext(UserContext);
  //const{username,loading}=name


  return (
    <>
      <ul>
        {name.loading
          ? <h4>loading....</h4>
          : name.username === undefined
          ?  <h4>No results</h4>
          : name.username.map(item => <li key={item.id}>{item.login}</li>)}
      </ul>
    </>
  );
}

export default UserList;
