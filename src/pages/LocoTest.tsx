import { FunctionComponent } from "react";
import LeftAlignBtn from "../components/LeftAlignBtn";
import Chip from "../components/Chip";

const LocoTest: FunctionComponent = () => {
  return (
    <div className="w-full relative shadow-[0px_32px_64px_rgba(0,_0,_0,_0.2)] rounded-3xl bg-surface border-border border-[2px] border-solid box-border h-[20.5rem] flex flex-col items-center justify-center p-[1rem] gap-[1rem]">
      <div className="self-stretch shadow-[0px_8px_24px_rgba(0,_0,_0,_0.2),_0px_16px_24px_rgba(59,_130,_246,_0.2)_inset] rounded-13xl bg-surface flex flex-col items-center justify-start p-[1rem] gap-[1rem]">
        <LeftAlignBtn
          isSelected={false}
          size="base"
          iconLeft
          iconRight
          btnText2="Testting"
          iconLeftUrl="/beenhere.svg"
          iconRightURL="/check-circle.svg"
        />
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
      </div>
      <div className="self-stretch rounded-13xl bg-surfaceinput flex flex-col items-center justify-start p-[1rem] gap-[1rem]">
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
    </div>
  );
};

export default LocoTest;