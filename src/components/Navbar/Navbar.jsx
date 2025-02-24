import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/job-logo.png";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const links = (
    <>
      <li className="mr-2">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to={"/myApplications"}>My Applications</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to={"/addJob"}>Add Job</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to={"/myPostedJobs"}>My Posted Jobs</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    logoutUser();
  };
  return (
    <div className="navbar bg-transparent relative">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="flex items-center" to="/">
          <img src={logo} alt="logo" className="w-14" />
          <h1 className="text-3xl font-bold">Job Portal</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <NavLink className="btn" onClick={handleSignOut}>
            Sign Out
          </NavLink>
        ) : (
          <>
            <NavLink className="btn" to="/login">
              Sign In
            </NavLink>
            <NavLink className="btn" to="/register">
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
