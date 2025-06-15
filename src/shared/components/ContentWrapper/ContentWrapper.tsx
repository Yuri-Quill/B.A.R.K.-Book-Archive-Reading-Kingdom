import clsx from "clsx";

import type { ChildrenProps, ClassNameProps } from "@/shared/types/props";

import "./content-wrapper.scss";

interface ContentWrapperProps extends ClassNameProps, ChildrenProps {}

export const ContentWrapper = ({
   children,
   className,
}: ContentWrapperProps) => {
   return <div className={clsx("content-wrapper", className)}>{children}</div>;
};
