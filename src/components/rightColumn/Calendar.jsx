import { FiCalendar } from "react-icons/fi";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RxCaretDown } from "react-icons/rx";



const Calendar = () => {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex items-center">
      <FiCalendar className="text-basePurple mr-2" />
      <div className="flex text-basePurple relative">
        <DatePicker 
          className="cursor-pointer"
          selected={startDate}
          onChange={(date) => setStartDate(date)} 
          dateFormat="EEE, dd MMM yyyy"
        />
        <RxCaretDown className="absolute top-[50%] -translate-y-[50%] right-[20%] text-2xl" />
      </div>
    </div>
  )
}

export default Calendar