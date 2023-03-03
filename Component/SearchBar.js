import { useState } from "react";

const SearchBar = ({ user, setFilteredUser }) => {
  const searchNames=(searchText)=>{
    return user.filter((res)=>
        res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
};
  const[searchText, setSearchText] = useState("Hello");

  return (
    <div className="search">
      <form onSubmit={(e)=>{
        e.preventDefault();
        const filteredNames=searchNames(searchText);
        console.log(filteredNames);
        setFilteredUser(filteredNames);
      }}>
        <input
          id="name"
          placeholder="name"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          
        ></input>
        <button> Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
