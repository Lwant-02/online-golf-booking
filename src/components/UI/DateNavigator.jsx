import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DateNavigator = () => {
  const [date, setDate] = useState(new Date());

  const changeDate = (days) => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    });
  };

  const formatDate = (date) => {
    const options = { weekday: "short", day: "2-digit", month: "short" };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <div className="flex items-center space-x-2 px-2">
      <button
        onClick={() => changeDate(-1)}
        className="border border-blue-400 rounded-full text-blue-500 hover:bg-blue-100 cursor-pointer"
      >
        <ChevronLeft className="size-4" />
      </button>
      <span className="p-1 border rounded-lg shadow-sm bg-white text-gray-800 text-xs w-24">
        {formatDate(date)}
      </span>
      <button
        onClick={() => changeDate(1)}
        className="border border-blue-400 rounded-full text-blue-500 hover:bg-blue-100 cursor-pointer"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
};

export default DateNavigator;
