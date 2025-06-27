import clsx from "clsx";

import type {
   ChildrenProps,

} from "@/shared/types/common-props.type";

import "./content-wrapper.scss";

interface ContentWrapperProps extends ChildrenProps {
   large: boolean;
}

export const ContentWrapper = ({ children, large }: ContentWrapperProps) => {
   return (
      <div className={clsx("content-wrapper", large && "content-wrapper--large")}>{children}</div>
   );
};
