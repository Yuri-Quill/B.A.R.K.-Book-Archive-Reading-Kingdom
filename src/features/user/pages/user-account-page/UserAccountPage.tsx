import { UserAccountForm } from "@/features/user/components/user-account-form/UserAccountForm";
import { UserProfileForm } from "@/features/user/components/user-profile-form/UserProfileForm";
import { ContentWrapper } from "@/shared/components/content-wrapper/ContentWrapper";
import { useAppSelector } from "@/app/store/hooks";
import "./user-account-page.scss";

const UserAccountPage = () => {
   const { user } = useAppSelector((state) => state.auth);

   const avatarUrl = `https://api.dicebear.com/9.x/initials/svg?chars=2&radius=50&seed=${encodeURIComponent(
      user?.username ?? ""
   )}`;

   const avatar = user?.avatar ? user?.avatar : avatarUrl;

   return (
      <section className="user-profile">
         <ContentWrapper>
            <h2 className="user-profile__title">
               Your account profile
            </h2>

               <figure className="user-profile__figure">
                  <img
                     className="user-profile__image"
                     src={avatar}
                     alt="User avatar"
                     width={48}
                     height={48}
                  />
                  <figcaption className="user-profile__caption">
                     <h3 className="user-profile__username">
                        {user?.username}
                     </h3>
                  </figcaption>
               </figure>

            <div className="user-profile__forms">
               <UserAccountForm />
               <UserProfileForm />
            </div>
         </ContentWrapper>
      </section>
   );
};

export default UserAccountPage;
