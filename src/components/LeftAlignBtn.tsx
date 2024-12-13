import { FunctionComponent } from "react";

export type LeftAlignBtnType = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  btnText2?: string;

  /** Variant props */
  isSelected?: boolean;
  size?: string;
};

const LeftAlignBtn: FunctionComponent<LeftAlignBtnType> = ({
  className = "",
  isSelected = false,
  size = "sm",
  iconLeft = true,
  iconRight = true,
  btnText2 = "Testting",
}) => {
  return (
    <button
      className={`cursor-pointer border-border border-[2px] border-solid p-[1rem] bg-[transparent] self-stretch rounded-2xl flex flex-row items-start justify-between data-[size='sm']:data-[isSelected='true']:py-[0.5rem] data-[size='sm']:data-[isSelected='true']:px-[2rem] data-[size='sm']:data-[isSelected='true']:rounded-13xl data-[size='sm']:data-[isSelected='true']:shadow-[0px_0px_64px_rgba(99,_102,_241,_0.2)] data-[size='sm']:data-[isSelected='true']:[background:linear-gradient(0deg,_rgba(99,_102,_241,_0.2),_rgba(76,_29,_149,_0.05))] [&_.beenhere-icon]:data-[size='sm']:data-[isSelected='true']:w-[1.5rem] [&_.beenhere-icon]:data-[size='sm']:data-[isSelected='true']:h-[1.5rem] [&_.check-circle-icon]:data-[size='sm']:data-[isSelected='true']:w-[1.5rem] [&_.check-circle-icon]:data-[size='sm']:data-[isSelected='true']:h-[1.5rem] ${className}`}
      data-isSelected={isSelected}
      data-size={size}
    >
      {iconLeft && (
        <img
          className="beenhere-icon w-iconsize relative h-iconsize"
          alt=""
          src="/beenhere.svg"
        />
      )}
      <div className="flex-1 flex flex-row items-center justify-center py-[0rem] px-[0.5rem]">
        <div className="flex-1 relative text-[1rem] leading-[1.5rem] font-medium font-medium-base text-text text-left">
          {btnText2}
        </div>
      </div>
      {iconRight && (
        <img
          className="check-circle-icon w-iconsize relative h-iconsize"
          alt=""
          src="/check-circle.svg"
        />
      )}
    </button>
  );
};

export default LeftAlignBtn;