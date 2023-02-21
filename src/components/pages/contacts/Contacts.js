import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import Title from "../../Home/Title";

export default function Contacts() {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [msessage, setMessage] = useState("");

  //================Error message Start here===============
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");

  //==================Error Message Ends here===================

  const [successMsg, setSuccessMsg] = useState("");

  //=================== Email Validation Start Here ================
  const emailValidation =(email)=>{
    return String(email).toLowerCase().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  }
  //=================== Email Validation Ends Here ================

  const handleName = (e) => {
    // console.log(e.target.value);
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMsg = (e) => {
    setMessage(e.target.value);
    setErrMessage("");
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Name is required");
    }
    if (!email) {
      setErrEmail("Email is required ");
    }else{
      if(!emailValidation(email)){
        setErrEmail('Not a valid Email !');
      }
    }
    if (!msessage) {
      setErrMessage("Message is required");
    }
    if (clientName && email && emailValidation(email) && msessage) {
      setClientName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div className="w-full">
      <Title title="Stay" subtitle="Tuned" />
      <div className="p-6 flex justify-between gap-20">
        <div className="w-1/2">
          <p className="flex justify-between w-full text-base text-gray-300 py-4 border-b-[1px] border-b-orange-500">
            <span className="bg-orange-600 text-gray-100 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center">
              Address:
            </span>{" "}
            Dhaka, Bangladesh
          </p>
          <p className="flex justify-between w-full text-base text-gray-300 py-4 border-b-[1px] border-b-orange-500">
            <span className="bg-orange-600 text-gray-100 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center">
              Phone:
            </span>{" "}
            +880 1819-237267
          </p>
        </div>
        <div className="w-1/2 ">
          <p className="flex justify-between w-full text-base text-gray-300 py-4 border-b-[1px] border-b-orange-500">
            <span className="bg-orange-600 text-gray-100 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center">
              Email:
            </span>{" "}
            wasimakram316082@gmail.com
          </p>
          <p className="flex justify-between w-full text-base text-gray-300 py-4 border-b-[1px] border-b-orange-500">
            <span className="bg-orange-600 text-gray-100 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center">
              Freelance:
            </span>{" "}
            Abileable
          </p>
        </div>
      </div>

      <div className="w-full mt-10">
        <Title title="Send" subtitle="Message" />
        <form className="p-6 flex flex-col gap-10">
          <div className="flex gap-10  justify-between">
            <div className="w-full">
              <input
                onChange={handleName}
                value={clientName}
                className={`${
                  errClientName
                    ? "border-pink-700 focus-visible:border-pink-700"
                    : "border-zinc-100 "
                }' w-full focus-visible:border-orange-500 bg-transparent border px-4 py-2 text-base text-gray-400  outline-none duration-300'`}
                type="text"
                placeholder="Your full Name"
              />
              <span className="text-sm font-normal text-pink-700">
                {errClientName}
              </span>
            </div>
            <div className="w-full">
              <input
                onChange={handleEmail}
                value={email}
                className={`${
                  errEmail
                    ? "border-pink-700 focus:border-pink-700"
                    : "border-zinc-100 "
                }' w-full focus:border-orange-400 bg-transparent border px-4 py-2 text-base text-gray-400  outline-none duration-300'`}
                type="text"
                placeholder="Your Email"
              />
              <span className="text-sm font-normal text-pink-700">
                {errEmail}
              </span>
            </div>
          </div>
          <div className="w-full">
            <textarea
              onChange={handleMsg}
              value={msessage}
              className={`${
                errMessage
                  ? "border-pink-700 focus:border-pink-700"
                  : "border-zinc-100"
              }' focus:border-orange-500 w-full bg-transparent border px-4 py-2 text-base text-gray-400  outline-none duration-300 resize-none '`}
              rows="4"
              cols="30"
              placeholder="Type your message...."
            ></textarea>
            <span className="text-sm font-normal text-pink-700">
              {errMessage}
            </span>
          </div>

          <button
            onClick={handleSend}
            className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-orange-500 duration-200"
            type="submit"
          >
            Send Message{" "}
            <span className="mt-1 text-orange-400">{<FiSend />}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
