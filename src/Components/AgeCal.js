import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const yearsDiff = today.getFullYear() - birthDateObj.getFullYear();

    // Check if the birthday hasn't occurred yet this year
    if (
      today.getMonth() < birthDateObj.getMonth() ||
      (today.getMonth() === birthDateObj.getMonth() &&
        today.getDate() < birthDateObj.getDate())
    ) {
      setAge(yearsDiff - 1);
    } else {
      setAge(yearsDiff);
    }
  };

  return (
    <div>
      <h2 style={{fontSize:'50px'}}>Age Calculator</h2>
      <label style={{fontSize:'40px'}} htmlFor="birthDate">Enter your birth date:</label>
      <br></br>
      <input
        type="date"
        id="birthDate"
        style={{borderRadius:'1px', width:'300px',margin:'20px', height:'20px',fontSize:'20px',padding:'10px'}}
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <br></br>
      <button style={{backgroundColor: 'blue',color:'white',fontSize:'20px'}} onClick={calculateAge}>Calculate</button>
      {age && <p style={{fontSize:'30px', fontWeight:'bold'}}>Your age is: {age}</p>}
    </div>
  );
};

export default AgeCalculator;