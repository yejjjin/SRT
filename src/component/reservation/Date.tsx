import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const Date: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="max-w-2xl w-full flex items-center">
      <div>
        <label
          id="departure-label"
          className="block text-sm font-medium leading-6 text-gray-900"
          style={{ width: "250px" }}
        >
          날짜 선택:
        </label>
        <div className="relative">
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedDate?.toLocaleDateString()}
            readOnly
            onClick={toggleCalendar}
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
            <FaCalendarAlt className="h-5 w-5 text-gray-400" />
          </div>
          {showCalendar && (
            <div className="absolute top-full left-0">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Date;
