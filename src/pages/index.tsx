import { NavLink } from "react-router-dom";

const IndexPage = () => {
  return (
    <div>
      index page
      <NavLink
        to="/about"
        className={({ isActive }) => `${isActive ? "text-blue-600" : "text-gray-600"}  font-bold`}
      >
        Nav to About
      </NavLink>
    </div>
  );
};

export default IndexPage;
