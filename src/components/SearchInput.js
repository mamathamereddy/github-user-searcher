import React, { useContext } from "react";
import { UserContext } from "./SearchUser";

function SearchInput() {               //child1
  const input = useContext(UserContext);
  //console.log(input)
  //const { inputvalue, setInputValue } = input       //destuctur the values and use(otherway)
  return (
    <input
      type="text"
      value={input.debouncevaluen}
      onChange={event => input.setInputValue(event.target.value)}
      placeholder="Search for user"
      required
    />
  );
}

export default SearchInput;
