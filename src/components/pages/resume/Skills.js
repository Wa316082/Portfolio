import React from "react";
import { FaDatabase, FaFlag } from "react-icons/fa";
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiArtstation } from "react-icons/si";
import ResumeTitle from "./ResumeTitle";
import { CgCodeSlash } from "react-icons/cg";
import { IoIosPaper } from "react-icons/io";


export default function Skills() {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-4">
        <ResumeTitle title="Design" icon={<SiArtstation />} />

        <div className="py-4">
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                    "
            >
              Web Development
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                    "
            >
              Api Design
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                    "
            >
              Web Design
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                    "
            >
              Ui Design
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[80%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-orange-400 inline-flex"></span>
      </div>
      <div className="col-span-4">
        <ResumeTitle title="Lnguages" icon={<FaFlag />} />

        <div className="py-4">
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                "
            >
              English
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                "
            >
              Benguli
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                "
            >
              Hindi
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[70%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <ResumeTitle title="Coding" icon={<CgCodeSlash />} />

        <div className="py-4">
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                    "
            >
              Html5 
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                    "
            >
              CSS
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                    "
            >
              Bootstrp & Tailwind
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                    "
            >
              Javscript
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                    "
            >
              Jquery Ajax
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                    "
            >
              React js
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[80%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                    "
            >
              Node js & Express js
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[80%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                    "
            >
              Laravel
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                    "
            >
              Django
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[60%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-orange-400 inline-flex"></span>
      </div>
      <div className="col-span-4">
        <ResumeTitle title="Database" icon={<FaDatabase />} />

        <div className="py-4">
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                "
            >
              MySql
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                "
            >
              Pgsql
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-orange-500">
            <p
              className="text-base text-textColor -mb-1.5
                "
            >
              MongoDB
            </p>
            <span className="w-full bg-lime-700 h-1 inline-flex relative">
              <span className="w-[70%] h-full absolute top-0 left-0 bg-orange-500"></span>
            </span>
          </div>
        
        </div>
      </div>
      <div className="col-span-4">
        
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-orange-400 inline-flex"></span>
      </div>
      <div className="col-span-4">
        <ResumeTitle title="Knowledge" icon={<IoIosPaper />} />

        <div className="py-4">
          <div className="py-3 gap-2 flex items-center justify-start">
            
            <span className="text-xl text-orange-400">
              { <SiAdobephotoshop /> }
            </span>
            <span>Photoshop</span>
          </div>
          <div className="py-3 gap-2 flex items-center justify-start">
            
            <span className="text-xl text-orange-400">
              { <SiAdobeillustrator /> }
            </span>
            <span>Adobe Ilustrator</span>
          </div>
          <div className="py-3 gap-2 flex items-center justify-start">
            
            <span className="text-xl text-orange-400">
              { <SiAdobexd /> }
            </span>
            <span>Adobe XD</span>
          </div>
          <div className="py-3 gap-2 flex items-center justify-start">
            
            <span className="text-xl text-orange-400">
              { <SiAdobeaftereffects /> }
            </span>
            <span>Adobe AfterEffects</span>
          </div>
          
        
        </div>
      </div>
    </div>
  );
}
