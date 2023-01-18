import React, { useState } from "react";

const API_URL = "https://api.github.com";

async function fetchResults(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch (e) {
    throw new Error(e);
  }
}

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onSearchChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  async function onSearchSubmit(event) {
    event.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
  }

  function User({ avatar, url, username }) {
    return (
      <div className="user">
        <img src={avatar} alt="Profile" width="50" height="50" />
        <a href={url} target="_blank" rel="noopener noreferrer">
          {username}
        </a>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="main">
        <form className="search-form" onSubmit={onSearchSubmit}>
          <input
            id="search"
            type="text"
            placeholder="Enter username or email"
            onChange={onSearchChange}
            value={query}
          />
          <button type="submit">Search</button>
        </form>

        <div id="results">
          <div>
            {results.map((user) => (
              <User
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// first version

// import React, { useState, useEffect, createContext } from "react";
// import UserList from "./UserList";
// import SearchInput from "./SearchInput";
// import { useDebounce } from 'use-debounce';

// export const UserContext = createContext();
// function SearchUser() {                //Parent
//   const [username, setUsername] = useState([]);
//   const [inputvalue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [debouncevalue] = useDebounce(inputvalue, 200);

//   useEffect(() => {
//     if(debouncevalue!==""){
//     setLoading(true);
//     fetch(`https://api.github.com/search/users?q=${debouncevalue}`)
//       .then(res => res.json())
//       .then(data => {
//         setUsername(data.items);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError("error");
//       })};
//   }, [debouncevalue]);
//   return (
//     <>
//       <UserContext.Provider
//         value={{ username, inputvalue, setInputValue, loading, error }}
//       >
//         <SearchInput />
//         <UserList />
//       </UserContext.Provider>
//     </>
//   );
// }

// export default SearchUser;
