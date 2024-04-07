import React, { useState } from "react";

const Departure: React.FC = () => {
  const [selectedDeparture, setSelectedDeparture] = useState<string | null>(
    null
  );
  const [selectedDestination, setSelectedDestination] = useState<string | null>(
    null
  );
  const [isOpenDeparture, setIsOpenDeparture] = useState(false);
  const [isOpenDestination, setIsOpenDestination] = useState(false);

  const departureOptions = [
    "수서",
    "동탄",
    "평택지제",
    "곡성",
    "공주",
    "광주송정",
    "구례구",
    "김천구미",
    "나주",
    "남원",
    "대전",
    "동대구",
    "마산",
    "목포",
    "밀양",
    "부산",
    "서대구",
    "순천",
    "경주",
  ]; // 출발역 목록
  const destinationOptions = [
    "수서",
    "동탄",
    "평택지제",
    "곡성",
    "공주",
    "광주송정",
    "구례구",
    "김천구미",
    "나주",
    "남원",
    "대전",
    "동대구",
    "마산",
    "목포",
    "밀양",
    "부산",
    "서대구",
    "순천",
    "경주",
  ]; // 도착역 목록

  const handleSelectDeparture = (item: string) => {
    setSelectedDeparture(item);
    setIsOpenDeparture(false);
  };

  const handleSelectDestination = (item: string) => {
    setSelectedDestination(item);
    setIsOpenDestination(false);
  };

  return (
    <div className="max-w-2xl w-full text-white flex justify-center items-center p-8 ">
      <div className="flex gap-5">
        <div>
          <label
            id="departure-label"
            className="block text-sm font-medium leading-6 text-gray-900"
            style={{ width: "250px" }}
          ></label>
          <div className="relative mt-2">
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
                  {selectedDeparture || "출발역"}
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
          <div className="relative mt-2">
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
                  {selectedDestination || "도착역"}
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

export default Departure;
