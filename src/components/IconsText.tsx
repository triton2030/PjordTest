import { FunctionComponent } from "react";

export type IconsTextType = {
  className?: string;
  text?: boolean;
  stringText?: string;
  editorChoice?: string;

  /** Variant props */
  size?: "xs" | "base";
  type?: string;
};

const IconsText: FunctionComponent<IconsTextType> = ({
  className = "",
  size = "xs",
  type = "Primary",
  text = true,
  stringText = "IconsText",
  editorChoice,
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-1 text-left text-xs text-ui-txt-primary font-medium-base [&_.iconstext]:data-[size='base']:data-[type='Primary']:text-base [&_.iconstext]:data-[size='base']:data-[type='Primary']:leading-[24px] [&_.editor-choice-icon]:data-[size='base']:data-[type='Primary']:w-6 [&_.editor-choice-icon]:data-[size='base']:data-[type='Primary']:h-6 ${className}`}
      data-size={size}
      data-type={type}
    >
      <img
        className="w-iconsize relative h-iconsize"
        alt=""
        src="/baselogoinblue-2.svg"
      />
      {text && (
        <div className="iconstext relative leading-[16px] font-medium">
          {stringText}
        </div>
      )}
      <img
        className="editor-choice-icon w-4 relative h-4"
        alt=""
        src={editorChoice}
      />
    </div>
  );
};

export default IconsText;
