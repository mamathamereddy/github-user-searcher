import React, { useState, useEffect, createContext } from "react";
import UserList from "./UserList";
import SearchInput from "./SearchInput";
import { useDebounce } from 'use-debounce';

export const UserContext = createContext();
function SearchUser() {                //Parent
  const [username, setUsername] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [debouncevalue] = useDebounce(inputvalue, 200);


  useEffect(() => {
    if(debouncevalue!==""){
    setLoading(true);
    fetch(`https://api.github.com/search/users?q=${debouncevalue}`)
      .then(res => res.json())
      .then(data => {
        setUsername(data.items);
        setLoading(false);
      })
      .catch(err => {
        setError("error");
      })};
  }, [debouncevalue]);
  return (
    <>
      <UserContext.Provider
        value={{ username, inputvalue, setInputValue, loading, error }}
      >
        <SearchInput />
        <UserList />
      </UserContext.Provider>
    </>
  );
}

export default SearchUser;
