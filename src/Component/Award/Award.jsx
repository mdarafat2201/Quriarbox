import React from "react";
import AwardAll from "../CommonComponent/AwardAll";
import { CiTrophy } from "react-icons/ci";
import Flex from "../CommonComponent/flex";
import { BsBook } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { FaCarSide } from "react-icons/fa";

const Award = () => {
  return (
    <>
      <div className="py-40 ">
        <div className="container ">
          <Flex className=" justify-between items-center">
            <AwardAll
              icon={<CiTrophy className="text-5xl" />}
              count="26+ "
              AwardTitle="Awards won"
            />
            <AwardAll
              icon={<BsBook className="text-5xl" />}
              count="65+ "
              AwardTitle="Awards won"
            />
            <AwardAll
              icon={<GrUserManager className="text-5xl" />}
              count="26+ "
              AwardTitle="Awards won"
            />
            <AwardAll
              icon={<FaCarSide className="text-5xl" />}
              count="26+ "
              AwardTitle="Awards won"
            />
            <AwardAll
              icon={<CiTrophy className="text-5xl" />}
              count="26+ "
              AwardTitle="Awards won"
            />
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Award;
