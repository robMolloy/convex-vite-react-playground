import { LogInWithEmailAndPasswordForm } from "@/components/templates/authFormTemplates/LogInWithEmailAndPasswordFormTemplate";
import { useAuthActions } from "@convex-dev/auth/react";
import { NavLink } from "react-router-dom";

const IndexPage = () => {
  const { signIn } = useAuthActions();
  return (
    <div>
      index page
      <NavLink
        to="/about"
        className={({ isActive }) => `${isActive ? "text-blue-600" : "text-gray-600"} font-bold`}
      >
        Nav to About
      </NavLink>
      <br />
      <br />
      <LogInWithEmailAndPasswordForm
        FeedbackComp={<div>FeedbackComp</div>}
        handleLogIn={(x) => signIn("password", { ...x, flow: "signIn" })}
      />
    </div>
  );
};

export default IndexPage;
