import { Link } from "react-router-dom";
import clsx from "clsx";

import { useAppSelector } from "@/app/store/hooks";

import { LogIn, SquareUserRound } from "lucide-react";

import { Routes } from "@/shared/constants/routes";

interface AuthButtonProps {
   className: string;
   cnImg: string;
}

export const AuthButton = ({ className, cnImg }: AuthButtonProps) => {
   const { isAuthenticated } = useAppSelector((state) => state.auth);

   const linkRoute = isAuthenticated ? Routes.userProfile : Routes.auth;

   return (
      <Link
         className={clsx("auth-btn", className)}
         to={linkRoute}
         aria-label="Authorization page"
         title="Authorization page"
      >
         {isAuthenticated ? (
            <SquareUserRound
               className={clsx("auth-btn__img", cnImg)}
               size={25}
            />
         ) : (
            <LogIn className={clsx("auth-btn__img", cnImg)} size={20} />
         )}
      </Link>
   );
};
