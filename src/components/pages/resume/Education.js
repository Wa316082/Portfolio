import React from "react";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";
import ResumeTitle from "./ResumeTitle";

export default function Education() {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-4">
        <ResumeTitle  title="Edcuations" icon={ <GiGraduateCap /> }/>
        <ResumeCard
          badge=""
          title="Manarat International University"
          subtitle="BsC in CSE"
          desc="I am doing my graduation in manarat InterNational University."
        />

        
        <ResumeCard
          badge="2016-2020"
          title="Chapainawabganj Polytechnic Institute"
          subtitle="Diploma in Food Technology"
          desc="I have done my diploma in engineering in food technology."
        />
        
        <ResumeCard
          badge="2011-2016"
          title="Sapahar Pilot High School "
          subtitle="SSC and Secondary School"
          desc="I have done my secondary school education at 2016"
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-orange-400 inline-flex"></span>
      </div>
      <div className="col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />

        <ResumeCard
          badge="2022-Present"
          title="Web Developer"
          subtitle="E-desh Limited"
          desc="I am developing web application sence 2022 at E-desh Limited."
        />
      </div>
    </div>
  );
}
