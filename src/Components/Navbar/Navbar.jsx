import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0"
          >
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <a className="text-lg font-roboto">Home</a>
            </li>
            <li>
              <a className="text-lg font-roboto">Recipes</a>
            </li>
            <li>
              <a className="text-lg font-roboto">About</a>
            </li>
            <li>
              <a className="text-lg font-roboto">Search</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl lg:text-3xl font-roboto p-0">
          Cooking Master
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-lg font-roboto">Home</a>
          </li>
          <li>
            <a className="text-lg font-roboto">Recipes</a>
          </li>
          <li>
            <a className="text-lg font-roboto">About</a>
          </li>
          <li>
            <a className="text-lg font-roboto">Search</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end pr-2">
        <IoIosSearch className="relative left-8 hidden md:block lg:block text-xl" />
        <input
          className="hidden md:block lg:block pl-9 py-[6px] rounded-3xl me-3 bg-[#150B2B0D] border-0 text-lg max-w-[175px]"
          type="text"
          placeholder="Search"
        />
        <CgProfile className="bg-[#0BE58A] text-lg p-2 rounded-full cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
