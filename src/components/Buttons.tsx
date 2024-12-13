import { FunctionComponent } from "react";

export type ButtonsType = {
  className?: string;
  iconRight?: boolean;
  iconLeft?: boolean;
  btnText?: boolean;
  stringBtn?: string;
  showButtons?: boolean;
  checkCircle?: string;
  contract?: string;

  /** Variant props */
  size?: "Big" | "Mid" | "Small";
  type?: "Accent" | "noStyle";
};

const Buttons: FunctionComponent<ButtonsType> = ({
  className = "",
  size = "Big",
  type = "Accent",
  iconRight = true,
  iconLeft = false,
  btnText = true,
  stringBtn = "History of Partnerships ",
  showButtons,
  checkCircle,
  contract,
}) => {
  return (
    showButtons && (
      <button
        className={`cursor-pointer border-ui-btn-secondary-tokenselection border-[2px] border-solid py-2 px-4 bg-[transparent] shadow-[0px_0px_48px_rgba(67,_56,_202,_0.5),_0px_-32px_98px_rgba(67,_56,_202,_0.5)] rounded-13xl [background:linear-gradient(180deg,_#6058ff,_#928dff),_linear-gradient(180deg,_#5036d0,_#5e58ff)] flex flex-row items-center justify-center gap-3 data-[size='Small']:data-[type='noStyle']:[border:unset] data-[size='Small']:data-[type='noStyle']:py-1 data-[size='Small']:data-[type='noStyle']:px-2 data-[size='Small']:data-[type='noStyle']:bg-[unset] data-[size='Small']:data-[type='noStyle']:shadow-[unset] data-[size='Small']:data-[type='noStyle']:[background:unset] data-[size='Small']:data-[type='noStyle']:gap-1 data-[size='Small']:data-[type='Accent']:py-1 data-[size='Small']:data-[type='Accent']:px-4 data-[size='Small']:data-[type='Accent']:gap-1 data-[size='Big']:data-[type='noStyle']:[border:unset] data-[size='Big']:data-[type='noStyle']:bg-[unset] data-[size='Big']:data-[type='noStyle']:shadow-[unset] data-[size='Big']:data-[type='noStyle']:[background:unset] data-[size='Mid']:data-[type='noStyle']:[border:unset] data-[size='Mid']:data-[type='noStyle']:bg-[unset] data-[size='Mid']:data-[type='noStyle']:shadow-[unset] data-[size='Mid']:data-[type='noStyle']:[background:unset] data-[size='Mid']:data-[type='noStyle']:gap-2 data-[size='Mid']:data-[type='Accent']:bg-[unset] data-[size='Mid']:data-[type='Accent']:gap-2 [&_.check-circle-icon1]:data-[size='Small']:data-[type='noStyle']:hidden [&_.check-circle-icon1]:data-[size='Small']:data-[type='Accent']:hidden [&_.check-circle-icon1]:data-[size='Big']:data-[type='noStyle']:hidden [&_.check-circle-icon1]:data-[size='Mid']:data-[type='noStyle']:hidden [&_.check-circle-icon1]:data-[size='Mid']:data-[type='Accent']:hidden [&_.button]:data-[size='Small']:data-[type='noStyle']:[text-decoration:unset] [&_.button]:data-[size='Small']:data-[type='noStyle']:h-[unset] [&_.button]:data-[size='Small']:data-[type='noStyle']:w-[unset] [&_.button]:data-[size='Small']:data-[type='noStyle']:text-sm [&_.button]:data-[size='Small']:data-[type='noStyle']:leading-[20px] [&_.button]:data-[size='Small']:data-[type='noStyle']:[display:unset] [&_.button]:data-[size='Small']:data-[type='noStyle']:[align-items:unset] [&_.button]:data-[size='Small']:data-[type='noStyle']:[justify-content:unset] [&_.button]:data-[size='Small']:data-[type='Accent']:[text-decoration:unset] [&_.button]:data-[size='Small']:data-[type='Accent']:h-[unset] [&_.button]:data-[size='Small']:data-[type='Accent']:w-[unset] [&_.button]:data-[size='Small']:data-[type='Accent']:text-sm [&_.button]:data-[size='Small']:data-[type='Accent']:leading-[20px] [&_.button]:data-[size='Small']:data-[type='Accent']:font-[unset] [&_.button]:data-[size='Small']:data-[type='Accent']:[display:unset] [&_.button]:data-[size='Small']:data-[type='Accent']:[align-items:unset] [&_.button]:data-[size='Small']:data-[type='Accent']:[justify-content:unset] [&_.button]:data-[size='Big']:data-[type='noStyle']:w-[150px] [&_.button]:data-[size='Mid']:data-[type='noStyle']:[text-decoration:unset] [&_.button]:data-[size='Mid']:data-[type='noStyle']:h-[unset] [&_.button]:data-[size='Mid']:data-[type='noStyle']:w-[unset] [&_.button]:data-[size='Mid']:data-[type='noStyle']:text-sm [&_.button]:data-[size='Mid']:data-[type='noStyle']:leading-[20px] [&_.button]:data-[size='Mid']:data-[type='noStyle']:[display:unset] [&_.button]:data-[size='Mid']:data-[type='noStyle']:[align-items:unset] [&_.button]:data-[size='Mid']:data-[type='noStyle']:[justify-content:unset] [&_.button]:data-[size='Mid']:data-[type='Accent']:[text-decoration:unset] [&_.button]:data-[size='Mid']:data-[type='Accent']:h-[unset] [&_.button]:data-[size='Mid']:data-[type='Accent']:w-[unset] [&_.button]:data-[size='Mid']:data-[type='Accent']:text-sm [&_.button]:data-[size='Mid']:data-[type='Accent']:leading-[20px] [&_.button]:data-[size='Mid']:data-[type='Accent']:[display:unset] [&_.button]:data-[size='Mid']:data-[type='Accent']:[align-items:unset] [&_.button]:data-[size='Mid']:data-[type='Accent']:[justify-content:unset] [&_.contract-icon]:data-[size='Small']:data-[type='noStyle']:hidden [&_.contract-icon]:data-[size='Small']:data-[type='Accent']:hidden [&_.contract-icon]:data-[size='Mid']:data-[type='noStyle']:hidden [&_.contract-icon]:data-[size='Mid']:data-[type='Accent']:hidden ${className}`}
        data-size={size}
        data-type={type}
      >
        {iconLeft && (
          <img
            className="check-circle-icon1 w-iconsize relative h-iconsize"
            alt=""
            src={checkCircle}
          />
        )}
        {btnText && (
          <a className="button [text-decoration:none] h-7 w-[202px] relative text-lg leading-[28px] font-medium font-medium-base text-ui-txt-primary text-center flex items-center justify-center">
            {stringBtn}
          </a>
        )}
        {iconRight && (
          <img
            className="contract-icon w-iconsize relative h-iconsize"
            alt=""
            src={contract}
          />
        )}
      </button>
    )
  );
};

export default Buttons;
