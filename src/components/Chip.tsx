import { FunctionComponent } from "react";
import IconsText from "./IconsText";

export type ChipType = {
  className?: string;
  name1?: string;
  text?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;

  /** Variant props */
  accent?: boolean;
  size?: "Small" | "Big";
};

const Chip: FunctionComponent<ChipType> = ({
  className = "",
  accent = true,
  size = "Small",
  name1 = "chip",
  text,
  iconLeft,
  iconRight,
}) => {
  return (
    <div
      className={`rounded-big-blocks bg-ui-accent-surface overflow-hidden flex flex-row items-center justify-between p-xxs text-left text-xs text-ui-txt-primary font-medium-base data-[accent='false']:data-[size='Big']:bg-ui-primary-border data-[accent='false']:data-[size='Big']:border-ui-primary-border data-[accent='false']:data-[size='Big']:border-[2px] data-[accent='false']:data-[size='Big']:border-solid [&_.chip]:data-[accent='false']:data-[size='Big']:text-base [&_.chip]:data-[accent='false']:data-[size='Big']:leading-[24px] [&_.x]:data-[accent='false']:data-[size='Big']:bg-ui-primary-surface [&_.x]:data-[accent='false']:data-[size='Big']:h-[unset] [&_.x]:data-[accent='false']:data-[size='Big']:[box-sizing:unset] ${className}`}
      data-accent={accent}
      data-size={size}
    >
      <div className="flex flex-row items-center justify-start py-0 px-2">
        <div className="chip relative leading-[16px] font-medium">{name1}</div>
      </div>
      <div className="x rounded-big-blocks bg-ui-empty-surface h-6 overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
        <IconsText
          size="xs"
          type="Primary"
          text={text}
          stringText="IconsText"
          editorChoice="/editor-choice.svg"
          iconLeft={iconLeft}
          iconRight={iconRight}
        />
      </div>
    </div>
  );
};

export default Chip;