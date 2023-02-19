import React from "react";

export default function ResumeCard({badge, title, subtitle, desc}) {
  return (
    <div className="w-full py-6 flex flex-col gap-2 border-b-[1px] border-b-orange-500 ">
      {
        badge ==="" ?<h6 className="w-32 text-center text-orange-500 border-[1px] border-orange-500 rounded-sm"> 2021-Present </h6> :<h6 className="w-32 text-center text-gray-200 border-[1px] border-gray-300 rounded-sm"> {badge}</h6>
      }
      
      <h2 className=" text-lg font-titlefont text-gray-300 font-medium">{title}</h2>
      <p className="text-sm text-gray-300 -mt-2">{subtitle}</p>
      <p className="text-base text-gray-400 font-medium pr-10 ">{desc}</p>
    </div>
  );
}
