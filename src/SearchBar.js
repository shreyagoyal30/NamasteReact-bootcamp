import { useState } from "react";
 import data from "./Team-member.json";


const searchNames=(searchText)=>{
    return data.filter((res)=>
        res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
};

const SearchBar = ({setFilteredNames}) => {
  const[searchText, setSearchText] = useState("Hello");

  return (
    <div className="search">
      <form onSubmit={(e)=>{
        e.preventDefault();
        const filteredNames=searchNames(searchText);
        console.log(filteredNames);
        setFilteredNames(filteredNames);
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
