import React from "react";
import AwardAll from "../CommonComponent/AwardAll";
import { CiTrophy } from "react-icons/ci";
import Flex from "../CommonComponent/flex";

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
              icon={<CiTrophy className="text-5xl" />}
              count="26+ "
              AwardTitle="Awards won"
            />
            <AwardAll
              icon={<CiTrophy className="text-5xl" />}
              count="26+ "
              AwardTitle="Awards won"
            />
            <AwardAll
              icon={<CiTrophy className="text-5xl" />}
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
