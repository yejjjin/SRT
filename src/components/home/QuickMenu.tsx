import { IoTicketOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiCloset } from "react-icons/bi";
import { IoWarningOutline } from "react-icons/io5";

const menuItems = [
  {
    icon: <IoTicketOutline />,
    text: "예매내역/환불",
  },
  {
    icon: <SlCalender />,
    text: "열차운임/시간표",
  },
  {
    icon: <RiCustomerService2Line />,
    text: "AI 챗봇",
  },
  {
    icon: <BiCloset />,
    text: "유실물센터",
  },
  {
    icon: <IoWarningOutline />,
    text: "안전신문고",
  },
];

const QuickMenu: React.FC = () => {
  return (
    <div className="flex bg-violet-950 mt-12 p-4 max-w-xl w-full">
      <ul className="flex w-full justify-between gap-6 whitespace-nowrap">
        {menuItems.map((item, index) => (
          <li key={index} className="flex w-full items-center justify-center ">
            <a
              href="#"
              className="text-white flex flex-col items-center justify-center"
            >
              <div className="rounded-full bg-white text-black text-3xl p-3 mb-3">
                {item.icon}
              </div>
              <span className="text-sm text-center">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickMenu;
