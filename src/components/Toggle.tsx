import { FunctionComponent } from "react";
import Buttons from "./Buttons";

export type ToggleType = {
  className?: string;
  showButtons?: boolean;
  iconLeft?: boolean;

  /** Variant props */
  property1?: "Default" | "Variant2";
};

const Toggle: FunctionComponent<ToggleType> = ({
  className = "",
  property1 = "Default",
  showButtons,
  iconLeft,
}) => {
  return (
    <div
      className={`relative rounded-13xl bg-ui-primary-surface border-ui-btn-primary-stroke border-[2px] border-solid box-border w-full flex flex-row items-center justify-center p-1 gap-2 data-[property1='Variant2']:rounded-2xl data-[property1='Variant2']:flex-col ${className}`}
      data-property1={property1}
    >
      <Buttons
        size="Big"
        type="noStyle"
        iconRight
        iconLeft={iconLeft}
        btnText
        stringBtn="Info and Services"
        showButtons
        checkCircle="/check-circle.svg"
        contract="/info.svg"
      />
      <Buttons
        size="Big"
        type="Accent"
        iconRight
        iconLeft={iconLeft}
        btnText
        stringBtn="History of Partnerships "
        showButtons
        checkCircle="/check-circle.svg"
        contract="/contract1.svg"
      />
      <Buttons
        size="Big"
        type="noStyle"
        iconRight={false}
        iconLeft={iconLeft}
        btnText
        stringBtn="item"
        showButtons={false}
        checkCircle="/check-circle.svg"
        contract="/keyboard-arrow-down.svg"
      />
      <Buttons
        size="Big"
        type="noStyle"
        iconRight={false}
        iconLeft={iconLeft}
        btnText
        stringBtn="item"
        showButtons={false}
        checkCircle="/check-circle.svg"
        contract="/keyboard-arrow-down.svg"
      />
      <Buttons
        size="Big"
        type="noStyle"
        iconRight={false}
        iconLeft={iconLeft}
        btnText
        stringBtn="item"
        showButtons={false}
        checkCircle="/check-circle.svg"
        contract="/keyboard-arrow-down.svg"
      />
    </div>
  );
};

export default Toggle;