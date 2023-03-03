import React from 'react';
import CardComponent from './Card-Component';
import ErrorComponent from './ErrorComponent'

const BodyComponent = ({filteredUser}) =>{
  if(!filteredUser.length) return <ErrorComponent/>
  else{
    return filteredUser.map((item)=>(
        <CardComponent item={item}/>
       ))}

}

export default BodyComponent;