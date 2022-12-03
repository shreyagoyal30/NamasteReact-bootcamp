   import React from "react";
   import ReactDOM from "react-dom/client"
   
   const heading = React.createElement("h1",{id:"title"},"Hello World by React");
        console.log(heading);
        const root1 = ReactDOM.createRoot(document.getElementById("root1"));
        root1.render(heading);
      