import Date from "../../component/reservation/Date";
import Departure from "../../component/reservation/Departure";
import Time from "../../component/reservation/Time";

const Reservation: React.FC = () => (
  <div className="flex flex-col  bg-violet-950 mt-20">
    <Departure />
    <div className=" flex gap-5  p-8 pt-0">
      <Date />
      <Time />
    </div>
  </div>
);
export default Reservation;
