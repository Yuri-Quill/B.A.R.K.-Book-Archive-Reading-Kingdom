import clsx from "clsx";

import type { ChildrenProps } from "@/shared/types/common-props.type";

import "./content-wrapper.scss";

interface ContentWrapperProps extends ChildrenProps {
   isLarge: boolean;
}

export const ContentWrapper = ({ children, isLarge }: ContentWrapperProps) => {
   return (
      <div
         className={clsx(
            "content-wrapper",
            isLarge && "content-wrapper--large"
         )}
      >
         {children}
      </div>
   );
};
