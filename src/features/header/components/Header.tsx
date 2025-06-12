import { ContentWrapper } from "@/shared/components/ContentWrapper/ContentWrapper";
import { Logo } from "@/shared/components/Logo/Logo";

import "./header.scss";

export const Header = () => {
   return (
      <header className="header">
         <ContentWrapper className="header">
            <Logo className="header" />
         </ContentWrapper>
      </header>
   );
};
