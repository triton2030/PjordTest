import { FunctionComponent } from "react";
import Toggle from "./Toggle";

export type RootType = {
  className?: string;
};

const Root: FunctionComponent<RootType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[520px] h-[444px] shadow-[0px_32px_64px_rgba(0,_0,_0,_0.2)] rounded-3xl bg-ui-primary-surface border-ui-primary-border border-[2px] border-solid box-border max-w-full flex flex-col items-center justify-center py-[13px] px-3.5 gap-8 leading-[normal] tracking-[normal] mq450:gap-4 ${className}`}
    >
      <Toggle property1="Default" showButtons={false} iconLeft={false} />
      <Toggle property1="Default" showButtons={false} iconLeft={false} />
      <Toggle property1="Variant2" showButtons iconLeft={false} />
      <Toggle property1="Default" showButtons={false} iconLeft={false} />
      <Toggle property1="Default" showButtons={false} iconLeft={false} />
    </div>
  );
};

export default Root;
