import { FunctionComponent } from "react";
import LeftAlignBtn from "../components/LeftAlignBtn";
import Chip from "../components/Chip";

const LocoTest: FunctionComponent = () => {
  return (
    <div className="w-full relative shadow-[0px_32px_64px_rgba(0,_0,_0,_0.2)] rounded-3xl bg-ui-primary-surface border-ui-primary-border border-[2px] border-solid box-border flex flex-col items-center justify-center p-4 gap-8 text-left text-sm text-ui-txt-secondary font-medium-base">
      <div className="self-stretch relative leading-[20px]">
        If a project doesn’t meet the minimum or soft cap target, buyers will be
        refunded at the end of the sale. If the maximum raise cap is hit the
        sale will conclude.
      </div>
      <LeftAlignBtn
        isSelected={false}
        size="base"
        beenhere="/beenhere.svg"
        checkCircle="/check-circle.svg"
      />
      <LeftAlignBtn
        isSelected
        size="base"
        beenhere="/calculate.svg"
        checkCircle="/contract.svg"
      />
      <Chip accent size="Small" name1="chip" text />
      <Chip accent={false} size="Big" name1="duds " text />
    </div>
  );
};

export default LocoTest;
