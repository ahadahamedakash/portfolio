const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Skills</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <nav className="text-white navbar lg:px-10 md:px-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="text-3xl uppercase p-2 font-primary text-primary font-semibold">
          Ah
          <span
            className="text-3xl font-extrabold uppercase"
            style={{ color: "#f9004d" }}
          >
            ad
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a
          className="font-bold text-2xl uppercase"
          style={{ color: "#f9004d" }}
          href="https://drive.google.com/file/d/1qy4Q1E7VcqJARzNHvixYIRhbmG82yIen/view?usp=sharing"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
