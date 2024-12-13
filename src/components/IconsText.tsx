import { FunctionComponent } from "react";

export type IconsTextType = {
  className?: string;
  showText?: boolean;
  stringText?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconRightURL?: string;
  iconLeftURL?: string;

  /** Variant props */
  size?: "xs" | "base";
  type?: string;
};

const IconsText: FunctionComponent<IconsTextType> = ({
  className = "",
  size = "xs",
  type = "Primary",
  showText = true,
  stringText = "IconsText",
  iconLeft = true,
  iconRight = true,
  iconRightURL,
  iconLeftURL = "/baselogoinblue-2.svg",
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-[0.25rem] text-left text-[0.75rem] text-text font-medium-base [&_.base-logo-in-blue-2-icon]:data-[size='base']:data-[type='Primary']:w-[1.5rem] [&_.base-logo-in-blue-2-icon]:data-[size='base']:data-[type='Primary']:h-[1.5rem] [&_.iconstext]:data-[size='base']:data-[type='Primary']:text-[1rem] [&_.iconstext]:data-[size='base']:data-[type='Primary']:leading-[1.5rem] [&_.staking-icon]:data-[size='base']:data-[type='Primary']:w-[1.5rem] [&_.staking-icon]:data-[size='base']:data-[type='Primary']:h-[1.5rem] [&_.staking-icon]:data-[size='base']:data-[type='Primary']:[overflow:unset] [&_.staking-icon]:data-[size='base']:data-[type='Primary']:[flex-shrink:unset] ${className}`}
      data-size={size}
      data-type={type}
    >
      {iconLeft && (
        <img
          className="base-logo-in-blue-2-icon w-iconsize relative h-iconsize"
          alt=""
          src={iconLeftURL}
        />
      )}
      {showText && (
        <div className="iconstext relative leading-[1rem] font-medium">
          {stringText}
        </div>
      )}
      {iconRight && (
        <img
          className="staking-icon w-iconsize relative h-iconsize overflow-hidden shrink-0"
          alt=""
          src={iconRightURL}
        />
      )}
    </div>
  );
};

export default IconsText;