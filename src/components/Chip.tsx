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
      className={`rounded-big-blocks bg-surfaceaccent overflow-hidden flex flex-row items-center justify-end p-xxs text-left text-[0.75rem] text-text font-medium-base data-[accent='false']:data-[size='Big']:bg-border data-[accent='false']:data-[size='Big']:p-xxs data-[accent='false']:data-[size='Big']:border-border data-[accent='false']:data-[size='Big']:border-[2px] data-[accent='false']:data-[size='Big']:border-solid [&_.chip-wrapper]:data-[accent='false']:data-[size='Big']:py-xxs [&_.chip-wrapper]:data-[accent='false']:data-[size='Big']:px-xxs [&_.chip]:data-[accent='false']:data-[size='Big']:text-[1rem] [&_.chip]:data-[accent='false']:data-[size='Big']:leading-[1.5rem] [&_.x]:data-[accent='false']:data-[size='Big']:bg-surface [&_.x]:data-[accent='false']:data-[size='Big']:h-[2rem] [&_.x]:data-[accent='false']:data-[size='Big']:py-xxs [&_.x]:data-[accent='false']:data-[size='Big']:px-xxs ${className}`}
      data-accent={accent}
      data-size={size}
    >
      <div className="chip-wrapper flex flex-row items-center justify-start py-[0rem] px-[0.5rem]">
        <div className="chip relative leading-[1rem] font-medium">{name1}</div>
      </div>
      <div className="x rounded-big-blocks bg-surfaceinput h-[1.5rem] overflow-hidden flex flex-row items-center justify-center py-[0rem] px-[0.25rem] box-border">
        <IconsText
          size="xs"
          type="Primary"
          text={text}
          stringText="the mega"
          iconLeft={iconLeft}
          iconRight={iconRight}
        />
      </div>
    </div>
  );
};

export default Chip;