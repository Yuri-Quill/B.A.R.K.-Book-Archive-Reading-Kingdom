import { UserProfileForm } from "@/features/user/components/UserProfileForm/UserProfileForm";
import "./user-account-page.scss";
import { ContentWrapper } from "@/shared/components/ContentWrapper/ContentWrapper";
import { UserAccountForm } from "@/features/user/components/UserAccountForm/UserAccountForm";

const UserAccountPage = () => {
   return (
      <section className="user-profile">
         <ContentWrapper>
            <UserAccountForm />
            <UserProfileForm />
         </ContentWrapper>
      </section>
   );
};

export default UserAccountPage;
