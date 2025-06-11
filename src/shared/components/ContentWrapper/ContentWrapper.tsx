import clsify from "@/shared/utils/clsify";

import type { ChildrenProps, ClassNameProps } from "@/app/types/common";

import "./content-wrapper.scss";

interface ContentWrapperProps extends ClassNameProps, ChildrenProps {}

export const ContentWrapper = ({
   children,
   className,
}: ContentWrapperProps) => {
   return (
      <div className={clsify("content-wrapper", [className && className])}>
         {children}
      </div>
   );
};
