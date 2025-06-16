export interface AuthResponse {
   status: "success";
   accessToken: string;
   refreshToken: string;
   data: {
      user: User;
   };
}

export interface User {
   id: string;
   _id: string;
   username: string;
   email: string;
   role: "user" | "admin";
   active: boolean;
   favorites: string[];
   cart: string[];
   orders: string[];
   createdAt: string;
   updatedAt: string;
   __v: number;
   profile: UserProfile;
}

export interface UserProfile {
   photo: string;
   country: string;
   city: string;
   address: string;
   phone: string;
   birthDate: string | null;
   gender: "male" | "female" | "other";
   zipCode: string;
   firstName: string;
   lastName: string;
}

export interface SigninPayload {
   email: string;
   password: string;
}

export interface SignupPayload {
   username: string;
   email: string;
   password: string;
   confirmPassword: string;
}

export interface LogoutPayload {
   status: "success" | "fail";
}
