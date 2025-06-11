import { ContentWrapper } from "@/shared/components/ContentWrapper/ContentWrapper";
import { Logo } from "@/shared/components/Logo/Logo";


import "./header.scss";

export const Header = () => {
   return (
      <header>
         <ContentWrapper className="header">
            <Logo />
         </ContentWrapper>
      </header>
   );
};
