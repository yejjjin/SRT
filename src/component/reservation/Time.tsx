import React, { useState } from "react";

const Time: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [isOpenTime, setIsOpenTime] = useState(false);

  const TimeOptions = [
    "00시 이후",
    "02시 이후",
    "04시 이후",
    "06시 이후",
    "08시 이후",
    "10시 이후",
    "12시 이후",
    "14시 이후",
    "16시 이후",
    "18시 이후",
    "20시 이후",
    "22시 이후",
  ];

  const handleSelectTime = (item: string) => {
    setSelectedTime(item);
    setIsOpenTime(false);
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
          <button
            type="button"
            className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
            aria-haspopup="listbox"
            aria-expanded={isOpenTime}
            aria-labelledby="departure-label"
            onClick={() => setIsOpenTime(!isOpenTime)}
          >
            <span className="flex items-center">
              <span className="ml-3 block truncate">
                {selectedTime || "00시 이후"}
              </span>
            </span>
          </button>

          {isOpenTime && (
            <ul
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              role="listbox"
              aria-labelledby="departure-label"
            >
              {TimeOptions.map((option, index) => (
                <li
                  key={index}
                  className={`${
                    selectedTime === option ? "bg-indigo-100" : ""
                  } text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9`}
                  onClick={() => handleSelectTime(option)}
                >
                  <div className="flex items-center">
                    <span className="font-normal ml-3 block truncate">
                      {option}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Time;
