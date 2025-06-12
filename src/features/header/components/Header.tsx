import { ContentWrapper } from "@/shared/components/ContentWrapper/ContentWrapper";
import { Logo } from "@/shared/components/Logo/Logo";
import { HeaderNav } from "@/features/header/components/HeaderNav/HeaderNav";

import { headerNavData } from "@/features/header/data/header.data";

import "./header.scss";

export const Header = () => {
   return (
      <header className="header">
         <ContentWrapper className="header">
            <Logo className="header__logo" />
            <HeaderNav items={headerNavData} />
         </ContentWrapper>
      </header>
   );
};
