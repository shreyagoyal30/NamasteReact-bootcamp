import React from "react";
   import ReactDOM from "react-dom/client"
   import CardComponent from "./Card-component.js";
   import TeamData from "./Team-member.js";
   import TeamLogo from '../images/teamLogo.jpg';
   const TitleComponent = "INSURGENTS";

   const HeadingComponent=()=> (
      <div id="title" className="title-class" tabIndex="1"> 
      <img src={TeamLogo} id="teamLogo" alt='INSURGENTS'></img>
      <h2 id="headingName">{TitleComponent}</h2>
      <div>
        <input type="text" className="searchBar" placeholder="Search...." />
      </div>
      </div>
   );       
   
  const CardContainer=()=>{
    return <div className="team-detail-container">
      {TeamData.map((member)=>{
       return (<CardComponent members={member} key={member.id}/>
      );
  })
  };
      </div>
  };
            const BodyComponent = () =>(
        
          <div className="card-container" >
            <CardContainer/>
            </div>
      
      );
      const Applayout= () => (
        <>
         <HeadingComponent/>
             <BodyComponent/>
             </>
      );
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(< Applayout />);