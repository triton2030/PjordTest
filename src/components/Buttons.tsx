import { FunctionComponent } from "react";

const Buttons: FunctionComponent = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer border-ui-btn-secondary-tokenselection border-[2px] border-solid py-2 px-4 bg-[transparent] relative shadow-[0px_0px_48px_rgba(67,_56,_202,_0.5),_0px_-32px_98px_rgba(67,_56,_202,_0.5)] rounded-13xl [background:linear-gradient(180deg,_#6058ff,_#928dff),_linear-gradient(180deg,_#5036d0,_#5e58ff)] box-border w-full flex flex-row items-center justify-center gap-3 ${className}`}
    >
      <img
        className="w-iconsize relative h-iconsize hidden"
        alt=""
        src="/check-circle.svg"
      />
      <a className="[text-decoration:none] h-7 w-[202px] relative text-lg leading-[28px] font-medium font-medium-base text-ui-txt-primary text-center flex items-center justify-center">{`History of Partnerships `}</a>
      <img
        className="w-iconsize relative h-iconsize"
        alt=""
        src="/contract1.svg"
      />
    </button>
  );
};

export default Buttons;