import React, { useState, useEffect } from 'react';
// import './style.css';
import {isValidName} from './Validation'

export default function App() {
  const UserBirthday = [
    {
      Img: '',
      FirstName: 'Sachin',
      LastName: 'Singh',
      Age: 23,
      Day: 17,
      Month: 2,
      Year: 2023,
    },
    {
      Img: '',
      FirstName: 'Kishan',
      LastName: 'Singh',
      Age: 23,
      Day: 17,
      Month: 2,
      Year: 2023,
    },
    {
      Img: '',
      FirstName: 'Vikesh',
      LastName: 'gaitonde',
      Age: 23,
      Day: 17,
      Month: 2,
      Year: 2023,
    },
    {
      Img: '',
      FirstName: 'gautam',
      LastName: 'tawade',
      Age: 23,
      Day: 18,
      Month: 2,
      Year: 2023,
    },
    {
      Img: '',
      FirstName: 'Pratisha',
      LastName: 'Shalke',
      Age: 30,
      Day: 18,
      Month: 2,
      Year: 2023,
    },
  ];

  const [user, setUser] = useState(UserBirthday);
  const date = new Date();
  let Day = date.getDate();
  let Month = date.getMonth() + 1;
  let Year = date.getFullYear();

  function getData() {
    const newUser = user.filter(
      (item) => item.Day === Day && item.Month === Month && item.Year === Year
    );
    setUser(newUser);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(Day, Month, Year);
  return (
    <div>
      {user.map((item, id) => (
        <h1 key={id}>{item.FirstName}</h1>
      ))}
    </div>
  );
}
