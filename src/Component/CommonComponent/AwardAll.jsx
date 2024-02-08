import React from "react";

const AwardAll = ({ icon, count, AwardTitle }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        {icon}
        <h2 className=" text-orangecolor text-[39px] font-extrabold font-Raleway">
          {count}
        </h2>
        <h4 className="text-[#464558] text-[20px] font-bold font-Raleway">
          {AwardTitle}
        </h4>
      </div>
    </>
  );
};

export default AwardAll;
