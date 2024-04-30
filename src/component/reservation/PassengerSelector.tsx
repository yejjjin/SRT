import React, { useState } from "react";

const PassengerSelector: React.FC = () => {
  const [selectedDeparture, setSelectedDeparture] = useState<string | null>(
    null
  );
  const [selectedDestination, setSelectedDestination] = useState<string | null>(
    null
  );
  const [isOpenDeparture, setIsOpenDeparture] = useState(false);
  const [isOpenDestination, setIsOpenDestination] = useState(false);

  const departureOptions = [
    "어른(만 13세 이상) 0명",
    "어른(만 13세 이상) 1명",
    "어른(만 13세 이상) 2명",
    "어른(만 13세 이상) 3명",
    "어른(만 13세 이상) 4명",
    "어른(만 13세 이상) 5명",
    "어른(만 13세 이상) 6명",
    "어른(만 13세 이상) 7명",
    "어른(만 13세 이상) 8명",
    "어른(만 13세 이상) 9명",
  ];
  const destinationOptions = [
    "어린이(만 13세 이하) 0명",
    "어린이(만 13세 이하) 1명",
    "어린이(만 13세 이하) 2명",
    "어린이(만 13세 이하) 3명",
    "어린이(만 13세 이하) 4명",
    "어린이(만 13세 이하) 5명",
    "어린이(만 13세 이하) 6명",
    "어린이(만 13세 이하) 7명",
    "어린이(만 13세 이하) 8명",
    "어린이(만 13세 이하) 9명",
  ];

  const handleSelectDeparture = (item: string) => {
    setSelectedDeparture(item);
    setIsOpenDeparture(false);
  };

  const handleSelectDestination = (item: string) => {
    setSelectedDestination(item);
    setIsOpenDestination(false);
  };

  return (
    <div className="max-w-2xl w-full text-white flex justify-center items-center p-8 pt-0 ">
      <div className="flex gap-5">
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
              aria-expanded={isOpenDeparture}
              aria-labelledby="departure-label"
              onClick={() => setIsOpenDeparture(!isOpenDeparture)}
            >
              <span className="flex items-center">
                <span className="ml-3 block truncate">
                  {selectedDeparture || "어른(만 13세 이상) 인원수 선택"}
                </span>
              </span>
            </button>

            {isOpenDeparture && (
              <ul
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                role="listbox"
                aria-labelledby="departure-label"
              >
                {departureOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`${
                      selectedDeparture === option ? "bg-indigo-100" : ""
                    } text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9`}
                    onClick={() => handleSelectDeparture(option)}
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
        <div>
          <label
            id="destination-label"
            className="block text-sm font-medium leading-6 text-gray-900"
            style={{ width: "250px" }}
          ></label>
          <div className="relative">
            <button
              type="button"
              className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
              aria-haspopup="listbox"
              aria-expanded={isOpenDestination}
              aria-labelledby="destination-label"
              onClick={() => setIsOpenDestination(!isOpenDestination)}
            >
              <span className="flex items-center">
                <span className="ml-3 block truncate">
                  {selectedDestination || "어린이(만 13세 이하) 인원수 선택"}
                </span>
              </span>
            </button>

            {isOpenDestination && (
              <ul
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                role="listbox"
                aria-labelledby="destination-label"
              >
                {destinationOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`${
                      selectedDestination === option ? "bg-indigo-100" : ""
                    } text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9`}
                    onClick={() => handleSelectDestination(option)}
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
    </div>
  );
};

export default PassengerSelector;
