import { FunctionComponent } from "react";

export type ButtonType = {
  className?: string;
  txt?: string;

  /** Variant props */
  property1?: string;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  property1 = "Default",
  txt = "button",
}) => {
  return (
    <div
      className={`shadow-[0px_8px_24px_rgba(0,_0,_0,_0.2),_0px_16px_24px_rgba(59,_130,_246,_0.2)_inset] rounded-13xl bg-ui-primary-border border-ui-btn-primary-stroke border-[2px] border-solid flex flex-row items-center justify-center py-py px-boundvariablesdata gap-space-x text-center text-lg text-ui-txt-primary font-medium-base ${className}`}
      data-property1={property1}
    >
      <img
        className="h-icon w-icon relative"
        loading="lazy"
        alt=""
        src="/book-2.svg"
      />
      <a className="[text-decoration:none] relative leading-[28px] font-medium text-[inherit]">
        {txt}
      </a>
      <img
        className="h-icon w-icon relative"
        loading="lazy"
        alt=""
        src="/book-2.svg"
      />
    </div>
  );
};

export default Button;
