import { useState } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight} from "react-icons/fa";

const Calendar = ({ goToPreviousPage, setSelectedDate, setSelectedTime, goToNextPage }) => {

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleClick = () => {
    if (date !== null && time !== null && time !== 'Select Time') {
      setSelectedDate(date);
      setSelectedTime(time);
      goToNextPage();
    }
  }

   const tomorrow = new Date();
   tomorrow.setDate(tomorrow.getDate() + 1);
   const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="w-1/2 h-3/5 bg-mmblue p-16 rounded shadow-lg h-quto mx-auto flex flex-col justify-between items-center">
      <div className="text-3xl">
        Please choose a date and time for service:
      </div>
      <input
        className="text-black w-1/3 h-8"
        type="date"
        min={minDate}
        onChange={(e) => setDate(e.target.value)} />
      <select
        onChange={(e) => setTime(e.target.value)}
        className="text-black w-1/3 h-8">
        <option value='Select Time'>Select Time</option>
        <option value='8:00'>8 am</option>
        <option value='9:00'>9 am</option>
        <option value='10:00'>10 am</option>
        <option value='11:00'>11 am</option>
        <option value='12:00'>12 pm</option>
        <option value='1:00'>1 pm</option>
        <option value='2:00'>2 pm</option>
        <option value='3:00'>3 pm</option>
        <option value='4:00'>4 pm</option>
      </select>
      <div className="flex w-full justify-between text-3xl">
        <button
          onClick={() => goToPreviousPage()}
          className="hover:scale-110 transform transition duration-200 ease-in-out"
        ><FaLongArrowAltLeft /></button>
        <button
          onClick={() => handleClick()}
          className="hover:scale-110 transform transition duration-200 ease-in-out"
        ><FaLongArrowAltRight /></button>
      </div>
    </div>
  )
}

export default Calendar;