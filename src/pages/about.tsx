import { NavLink } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      about page
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? "text-blue-600" : "text-gray-600"} font-bold`}
      >
        Nav to Index
      </NavLink>
    </div>
  );
};

export default AboutPage;
