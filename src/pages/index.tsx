import { AuthLoading, AuthSignedIn, AuthSignedOut } from "@/hooks/useAuth";
import { NavLink } from "react-router-dom";

const IndexPage = () => {
  return (
    <div>
      <AuthLoading>Loading</AuthLoading>
      <AuthSignedIn>Signed in</AuthSignedIn>
      <AuthSignedOut>Signed out</AuthSignedOut>
      <br />
      <br />
      index page
      <NavLink
        to="/about"
        className={({ isActive }) => `${isActive ? "text-blue-600" : "text-gray-600"} font-bold`}
      >
        Nav to About
      </NavLink>
    </div>
  );
};

export default IndexPage;
