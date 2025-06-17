import { useAppSelector } from "@/app/store/hooks";
import { Routes } from "@/shared/constants/routes";

import clsx from "clsx";
import { LogIn, ContactRound } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthButtonProps {
   className: string;
   cnImg: string;
}

export const AuthButton = ({ className, cnImg }: AuthButtonProps) => {
   const { isAuthenticated } = useAppSelector((state) => state.auth);

   const linkRoute = isAuthenticated ? Routes.profile : Routes.auth;

   return (
      <Link
         className={clsx("auth-btn", className)}
         to={linkRoute}
         aria-label="Authorization page"
         title="Authorization page"
      >
         {isAuthenticated ? (
            <ContactRound className={clsx("auth-btn__img", cnImg)} size={25} />
         ) : (
            <LogIn className={clsx("auth-btn__img", cnImg)} size={20} />
         )}
      </Link>
   );
};
