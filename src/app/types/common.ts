import { type LucideIcon } from "lucide-react";

export interface ClassNameProps {
   className?: string;
}

export interface ActiveStateProps {
   isActive?: boolean;
}

export interface ChildrenProps {
   children: React.ReactNode;
}

export interface ImageProps {
   image: string | LucideIcon;
}

export interface OnClickProps {
   onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface StatefulClassNameProps extends ClassNameProps, ActiveStateProps, ChildrenProps {}
