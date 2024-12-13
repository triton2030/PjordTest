import { FunctionComponent } from "react";

export type LeftAlignBtnType = {
  className?: string;
  beenhere?: string;
  checkCircle?: string;
  iconLeft?: boolean;
  iconRight?: boolean;

  /** Variant props */
  isSelected?: boolean;
  size?: string;
};

const LeftAlignBtn: FunctionComponent<LeftAlignBtnType> = ({
  className = "",
  isSelected = false,
  size = "sm",
  beenhere,
  checkCircle,
  iconLeft = true,
  iconRight = true,
}) => {
  return (
    <div
      className={`self-stretch rounded-2xl border-ui-btn-primary-stroke border-[2px] border-solid flex flex-row items-start justify-between p-4 text-left text-base text-ui-txt-primary font-medium-base data-[size='base']:data-[isSelected='true']:shadow-[0px_0px_64px_rgba(99,_102,_241,_0.2)] data-[size='base']:data-[isSelected='true']:[background:linear-gradient(0deg,_rgba(99,_102,_241,_0.2),_rgba(76,_29,_149,_0.05))] [&_.beenhere-icon]:data-[size='base']:data-[isSelected='true']:w-7 [&_.beenhere-icon]:data-[size='base']:data-[isSelected='true']:h-7 [&_.check-circle-icon1]:data-[size='base']:data-[isSelected='true']:w-7 [&_.check-circle-icon1]:data-[size='base']:data-[isSelected='true']:h-7 ${className}`}
      data-isSelected={isSelected}
      data-size={size}
    >
      {iconLeft && (
        <img
          className="beenhere-icon w-iconsize relative h-iconsize"
          alt=""
          src={beenhere}
        />
      )}
      <div className="flex-1 flex flex-row items-center justify-center py-0 px-2">
        <div className="flex-1 relative leading-[24px] font-medium">
          LeftAlignButton
        </div>
      </div>
      {iconRight && (
        <img
          className="check-circle-icon1 w-iconsize relative h-iconsize"
          alt=""
          src={checkCircle}
        />
      )}
    </div>
  );
};

export default LeftAlignBtn;