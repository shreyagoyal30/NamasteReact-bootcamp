const CardComponent=({members})=>{
    const {name,id,companyOrCollege,experienceOrSemester,location,img}=members;
    return(
        <div id="card" className="cards">
            <img src={img}/>
            <h2>{name}</h2>
            <h3>{companyOrCollege}</h3>
            <h4>{experienceOrSemester}</h4>
            <h5> {location}</h5>
            <h6> {id}</h6>
        </div>
  );
    };

  export default CardComponent;