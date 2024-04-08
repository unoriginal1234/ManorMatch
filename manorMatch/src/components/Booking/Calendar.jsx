import { useState } from 'react';


const Calendar = ({ goToPreviousPage, setSelectedDate, setSelectedTime, goToNextPage }) => {

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleClick = () => {
    if (date !== null && time !== null) {
      setSelectedDate(date);
      setSelectedTime(time);
      goToNextPage();
    }
  }

   const tomorrow = new Date();
   tomorrow.setDate(tomorrow.getDate() + 1);
   const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="bg-mmblue p-6 rounded shadow-lg h-quto mx-auto flex">
      <button onClick={() => goToPreviousPage()}>PREVIOUS</button>
      <div>
        Please choose a date and time for service:
      </div>
      <input
        className="text-black"
        type="date"
        min={minDate}
        onChange={(e) => setDate(e.target.value)} />
      <select onChange={(e) => setTime(e.target.value)} className="text-black">
        <option value='8:00'>8:00 AM</option>
        <option value='9:00'>9:00 AM</option>
        <option value='10:00'>10:00 AM</option>
        <option value='11:00'>11:00 AM</option>
        <option value='12:00'>12:00 PM</option>
        <option value='1:00'>1:00 PM</option>
        <option value='2:00'>2:00 PM</option>
        <option value='3:00'>3:00 PM</option>
        <option value='4:00'>4:00 PM</option>
      </select>
      <button onClick={() => handleClick()}>NEXT</button>
    </div>
  )
}

export default Calendar;