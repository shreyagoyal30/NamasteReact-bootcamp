import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./Card-component.js";
import TeamData from "./Team-member.json";
import TeamLogo from "../images/teamLogo.jpg";
import * as Constants from "./Constants.js";
import SearchBar from "./SearchBar.js";
import { useState } from "react";

const HeadingComponent = () => (
  <div id="title" className="title-class" tabIndex="1">
    <img src={TeamLogo} id="teamLogo" alt="INSURGENTS"></img>
    <h2 id="headingName">{Constants.Title}</h2>
  </div>
);
const CardContainer = ({ filteredNames }) => {
  return (
    <div className="team-detail-container">
      {filteredNames.map((member) => {
        return <CardComponent members={member} key={member.discord} />;
      })}
      ;
    </div>
  );
};

const BodyComponent = () => {
  const [filteredNames, setFilteredNames] = useState(TeamData);
  return (
    <div className="card-container">
      <SearchBar setFilteredNames={setFilteredNames} />
      <CardContainer filteredNames={filteredNames} />
    </div>
  );
};

const Applayout = () => (
  <>
    <HeadingComponent />
    <BodyComponent />
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
