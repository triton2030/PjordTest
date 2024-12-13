import { FunctionComponent } from "react";
import Chip from "../components/Chip";
import LeftAlignBtn from "../components/LeftAlignBtn";

const LocoTest: FunctionComponent = () => {
  return (
    <div className="w-full relative shadow-[0px_32px_64px_rgba(0,_0,_0,_0.2)] rounded-3xl bg-surface border-border border-[2px] border-solid box-border flex flex-col items-center justify-center p-[2rem] gap-[2rem]">
      <Chip
        accent
        size="Small"
        name1="try this"
        text
        iconLeft
        iconRight
        staking="/staking.svg"
        iconLeftURL="/baselogoinblue-2.svg"
      />
      <LeftAlignBtn
        isSelected={false}
        size="base"
        iconLeft
        iconRight
        btnText2="Testting"
        iconLeftUrl="/beenhere.svg"
        iconRightURL="/check-circle.svg"
      />
      <LeftAlignBtn
        isSelected
        size="sm"
        iconLeft
        iconRight
        btnText2="Another string"
        iconLeftUrl="/calendar-today.svg"
        iconRightURL="/data-usage.svg"
      />
      <Chip
        accent={false}
        size="Big"
        name1="The"
        text
        iconLeft
        iconRight
        staking="/campaign.svg"
        iconLeftURL="/baselogoinblue-21.svg"
      />
    </div>
  );
};

export default LocoTest;