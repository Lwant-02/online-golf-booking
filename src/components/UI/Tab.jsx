import { House, CalendarDays, Info, Tickets } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUtilsStore } from "../../store/useUtilsStore";

export const Tab = () => {
  const { closeDrawer, setActiveTab, activeTab } = useUtilsStore();
  const navigate = useNavigate();

  return (
    <div
      role="tablist"
      className="tabs tabs-sm gap-8 sm:flex-row flex-col w-full sm:justify-end justify-center items-center sm:px-10 "
    >
      <a
        role="tab"
        className={`tab ${
          activeTab === "home" && "tab-active"
        } sm:w-auto w-36 flex gap-1 cursor-pointer items-center sm:justify-center justify-start sm:pl-0 pl-7`}
        onClick={() => {
          setActiveTab("home");
          navigate("/");
          closeDrawer();
        }}
      >
        <span>{<House className="size-5" />}</span>
        <p className="font-bold text-sm">Home</p>
      </a>
      <a
        role="tab"
        className={`tab ${
          activeTab === "booking" && "tab-active"
        }  sm:w-auto w-36  gap-1 cursor-pointer items-center sm:justify-center  justify-start sm:pl-0 pl-7`}
        onClick={() => {
          setActiveTab("booking");
          navigate("/booking");
          closeDrawer();
        }}
      >
        <span>{<CalendarDays className="size-5" />}</span>
        <p className="font-bold text-sm">Booking</p>
      </a>
      <a
        role="tab"
        className={`tab ${
          activeTab === "reservation" && "tab-active"
        }  sm:w-auto w-36  gap-1 cursor-pointer items-center sm:justify-center justify-start sm:pl-0 pl-7`}
        onClick={() => {
          setActiveTab("reservation");
          navigate("/reservation");
          closeDrawer();
        }}
      >
        <span>{<Tickets className="size-5" />}</span>
        <p className="font-bold text-sm">Reservation</p>
      </a>
      <a
        role="tab"
        className={`tab ${
          activeTab === "about" && "tab-active"
        }  sm:w-auto w-36  gap-1 cursor-pointer items-center sm:justify-center  justify-start sm:pl-0 pl-7`}
        onClick={() => {
          setActiveTab("about");
          navigate("/about");
          closeDrawer();
        }}
      >
        <span>{<Info className="size-5" />}</span>
        <p className="font-bold text-sm">About</p>
      </a>
    </div>
  );
};
