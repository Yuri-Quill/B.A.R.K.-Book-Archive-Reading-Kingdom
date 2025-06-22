import { UserAccountForm } from "@/features/user/components/user-account-form/UserAccountForm";
import { UserProfileForm } from "@/features/user/components/user-profile-form/UserProfileForm";
import { ContentWrapper } from "@/shared/components/content-wrapper/ContentWrapper";
import "./user-account-page.scss";

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
