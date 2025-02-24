import React from "react";
import { motion } from "framer-motion";
import { CustomButton } from "./CustomButton";
import { useUtilsStore } from "../../store/useUtilsStore";

export const Packages = ({ title, price, badge, features, isHome }) => {
  const { setActiveTab } = useUtilsStore();
  return (
    <motion.div
      className="card card-md w-80 bg-primary-color border border-base-content/10 shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-body">
        <div className="flex justify-between flex-col relative">
          <h2 className="text-accent-color text-xl font-bold">{title}</h2>
          <span className="text-xl">฿{price}</span>
          {badge && (
            <span className="badge badge-xs badge-warning absolute left-20 top-9 ">
              {badge}
            </span>
          )}
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {features.map((item, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {isHome ? (
          <div className="mt-6">
            <CustomButton
              buttonName="Get Started"
              type="secondaryButton"
              url="/booking"
              onClick={() => setActiveTab("booking")}
            />
          </div>
        ) : (
          <fieldset className="fieldset p-3 bg-[#2B2B2B] border border-base-300 rounded-box w-full">
            <label className="fieldset-label text-primary-color text-sm font-semibold">
              <input
                type="checkbox"
                className="checkbox checkbox-success checkbox-sm"
                name="checkbox"
              />
              Select
            </label>
          </fieldset>
        )}
      </div>
    </motion.div>
  );
};
