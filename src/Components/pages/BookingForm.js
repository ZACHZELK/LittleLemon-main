import React, { useState } from 'react';
import "./BookingForm.css";
import { BookingTable } from './BookingTable';

export const BookingForm = (props) => {
  const [partyname, setPartyname] = useState('');
  const [occasion, setOccasion] = useState('');
  const [guests, setGuests] = useState('1');
  const [date, setDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState('');

  //Errors State
  const [partynameErr, setPartynameErr] = useState({});
  const [occasionErr, setOccasionErr] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    console.log(partyname, occasion, guests, date, availableTimes);
    return isValid

  }

  const handlechange = (e) => {
    setDate(e);
  }

  const formValidation = () => {
    const partynameErr = {};
    const occasionErr = {};
    let isValid = true;

    if (partyname.trim().length > 10) {
      partynameErr.partynameLength = "Party Name must less than 10 Characters.";
      isValid = false;
    }
    if (occasion.trim().length > 24) {
      occasionErr.occasionLength = "Must less than 24 Characters.";
      isValid = false;
    }
    setPartynameErr(partynameErr);
    setOccasionErr(occasionErr);
    return isValid
  }

  return (
    <div className='divfrom'>
      <form onSubmit={handleSubmit}>
        <label>
          Party's Name:
          <input type='text' value={partyname} name='name'
            onChange={(e) => { setPartyname(e.target.value) }} />
        </label>
        {Object.keys(partynameErr).map((key) => {
          return <div style={{ color: 'red' }}>{partynameErr[key]}</div>
        })}

        <br />

        <label>
          Occasion:
          <input type='text' value={occasion} name='name'
            onChange={(e) => { setOccasion(e.target.value) }} />
        </label>
        {Object.keys(occasionErr).map((key) => {
          return <div style={{ color: 'red' }}>{occasionErr[key]}</div>
        })}

        <br />

        <label>Number of guests:</label>
        <select value={guests} onChange={(e) => { setGuests(e.target.value) }}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <input type='dropdown' value={guests} name='guests'
            onChange={(e) => { setGuests(e.target.value) }} />
        </select>

        <br />

        <label>
          Date:
          <input type='date' value={date} name='date'
            onChange={(e) => { handlechange(e.target.value) }} />
        </label>

        <br />

        <label>Times available:</label>
      
  
        <br />

        <button type='submit' onClick={handleSubmit} value={'Make Your Reservation'}>Make Your Reservation</button>
      </form>
    </div>
  )
};
