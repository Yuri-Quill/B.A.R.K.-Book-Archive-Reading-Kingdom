import { HeaderActions } from "@/features/header/components/header-actions/HeaderActions";
import { HeaderNav } from "@/features/header/components/header-nav/HeaderNav";
import { ContentWrapper } from "@/shared/components/content-wrapper/ContentWrapper";
import { Logo } from "@/shared/components/logo/Logo";

import {
   actionsNavData,
   headerNavData,
} from "@/features/header/data/header.data";

import "./header.scss";

export const Header = () => {
   return (
      <header className="header">
         <ContentWrapper large={true}>
            <Logo className="header__logo" />

            <HeaderNav items={headerNavData} />
            <HeaderActions items={actionsNavData} />
         </ContentWrapper>
      </header>
   );
};
