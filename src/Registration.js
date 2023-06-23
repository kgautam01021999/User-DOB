import React, { useState, useEffect } from 'react';
// import './style.css';
import { isValidName } from './Validation';

export default function Registration() {
  let initial;
  if (localStorage.getItem('userDetail') === null) {
    initial = [];
  } else {
    initial = JSON.parse(localStorage.getItem('userDetail'));
  }
  const [userData, setUserData] = useState(initial);

  const [register, setRegister] = useState({
    Image: '',
    FirstName: '',
    LastName: '',
    Age: '',
    Day: '',
    Month: '',
    Year: '',
  });
  localStorage.setItem('useDetail', JSON.stringify(userData));

  function handleSubmit(e) {
    e.preventDefault();
    const newDatauser = { ...register, id: new Date().getTime() };

    setUserData([...userData, newDatauser]);
    localStorage.setItem('useDetail', JSON.stringify(userData));
    console.log(newDatauser);
  }
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setRegister({ ...register, [name]: value });
    // console.log(name, value);
  }

  return (
    <form>
      <input type="file" placeholder="Image" />

      <input
        onChange={handleInput}
        value={register.FirstName}
        name="FirstName"
        placeholder="FirstName"
        pattern=" /^[a-zA-Z ]+$/"
        required
      />

      <input
        onChange={handleInput}
        value={register.LastName}
        name="LastName"
        placeholder="LastName"
      />

      <input
        onChange={handleInput}
        value={register.Age}
        name="Age"
        type="Number"
        placeholder="Age"
      />

      <input
        onChange={handleInput}
        value={register.Day}
        name="Day"
        type="Number"
        placeholder="Day"
      />

      <input
        onChange={handleInput}
        value={register.Month}
        name="Month"
        type="Number"
        placeholder="Month"
      />

      <input
        onChange={handleInput}
        value={register.Year}
        name="Year"
        type="Number"
        placeholder="Year"
      />

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
