import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { ko } from "date-fns/locale";

const Date: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setShowModal(false);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="max-w-2xl w-full flex items-center">
      <div>
        <label
          id="departure-label"
          className="block text-sm font-medium leading-6 text-gray-900"
          style={{ width: "250px" }}
        ></label>
        <div className="relative">
          <div className="block w-full pl-3 pr-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm bg-white">
            <span
              className="ml-3 block truncate cursor-pointer"
              onClick={toggleModal}
            >
              {selectedDate?.toLocaleDateString() || "날짜 선택"}
            </span>
            <div
              className="absolute inset-y-0 right-0 flex items-center cursor-pointer"
              onClick={toggleModal}
            >
              <div className="h-5 w-5 text-gray-400 mr-3">
                <FaCalendarAlt className="mx-auto" />
              </div>
            </div>
          </div>
          {showModal && (
            <div
              className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50"
              onClick={toggleModal}
            >
              <div
                className="bg-white p-4 rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="yyyy-MM-dd"
                  locale={ko}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Date;
