import PassengerSelector from "src/component/reservation/PassengerSelector";
import Date from "../../component/reservation/Date";
import Departure from "../../component/reservation/Departure";
import Time from "../../component/reservation/Time";
import { IoSearch } from "react-icons/io5";

const Reservation: React.FC = () => (
  <div className="flex flex-col items-center bg-violet-950 mt-20">
    <Departure />
    <div className="flex items-center gap-5  p-8 pt-0">
      <Date />
      <Time />
    </div>
    <PassengerSelector />

    <div className="flex w-full justify-center p-8 pt-0">
      <a
        href="#"
        className="bg-slate-50 w-full p-2 rounded-lg text-center flex items-center justify-center"
      >
        <IoSearch className="mr-2" /> {/* 아이콘 */}
        조회하기
      </a>
    </div>
  </div>
);
export default Reservation;
