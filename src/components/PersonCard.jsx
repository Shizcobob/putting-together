import React, { useState } from 'react'


const PersonCard = (props) => {
    const {first_name} = props
    const {last_name} = props
    const {hair_color} = props
    const {age : initalAge} = props;
    const [age, setAge] = useState(initalAge);
    const myStyle = {
        textAlign: "center",
    }

      

    
    const birthdayClick = () => {
      setAge(age + 1);
    };



  return (
    <>
    <h1 style={myStyle}>{last_name}, {first_name}</h1>
    <p style={myStyle}>Age: {age}</p>
    <p style={myStyle}>Hair Color: {hair_color}</p>
    <button onClick={birthdayClick}>Birthday Button for {first_name} {last_name}</button>
    </>
  )
}

export default PersonCard

