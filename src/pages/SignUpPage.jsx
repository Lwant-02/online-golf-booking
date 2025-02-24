import React from "react";
import { motion } from "framer-motion";
import background from "../assets/image/form-bg.jpg";
import { SignupForm } from "../components/signup/SignupForm";
import { FormThumbnail } from "../components/UI/FormThumbnail";

export const SignUpPage = () => {
  return (
    <div className="relative w-full min-h-screen flex-1 overflow-auto overflow-y-auto justify-center items-center flex flex-col ">
      <div
        className="relative w-full min-h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 flex sm:flex-row flex-col items-center justify-center text-center h-full px-6 w-full gap-3 mt-12">
          <FormThumbnail
            subTitle="Create an account to unlock personalized golf insights, real-time coaching tips, and exclusive course recommendations."
            title="Join the Ultimate Golf Experience!"
          />
          <motion.div
            className="sm:w-2/6 w-full sm:mb-0 mb-5 bg-white h-auto p-8 rounded-xl shadow-lg flex flex-col justify-center items-center gap-5"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col w-full h-auto justify-start items-start">
              <p className="capitalize text-sm font-semibold">
                LET'S GET YOU STARTED
              </p>
              <h1 className="text-lg sm:text-2xl font-bold drop-shadow-xl text-accent-color">
                Create An Account
              </h1>
            </div>
            <SignupForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
