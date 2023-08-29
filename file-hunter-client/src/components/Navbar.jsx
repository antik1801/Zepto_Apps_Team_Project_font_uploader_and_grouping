import React, { useEffect, useState } from "react";
import LogoText from "../mini-components/texts/LogoText";
import LogoImage from "../mini-components/Images/LogoImage";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [active,theme]);

  const handleToggle = e =>{
    if (e.target.checked) {
        setTheme("forest");
      } else {
        setTheme("light");
      }
  }

  const navItems = (
    <>
      <a
        href="#"
        className={`${
          active === "home" ? "text-purple-600" : "text-gray-800"
        }  text-sm font-semibold hover:text-purple-600 mr-4`}
        onClick={() => setActive("home")}
      >
        Home
      </a>
      <a
        href="#"
        className={`${
          active === "product" ? "text-purple-600" : "text-gray-800"
        }  text-sm font-semibold hover:text-purple-600 mr-4`}
        onClick={() => setActive("product")}
      >
        Add A Group
      </a>
      <a
        href="#"
        className={`${
          active === "partners" ? "text-purple-600" : "text-gray-800"
        }  text-sm font-semibold hover:text-purple-600 mr-4`}
        onClick={() => setActive("partners")}
      >
        Uploaded Font
      </a>
      <a
        href="#"
        className={`${
          active === "price" ? "text-purple-600" : "text-gray-800"
        }  text-sm font-semibold hover:text-purple-600 mr-4`}
        onClick={() => setActive("price")}
      >
        All Groups
      </a>
    </>
  );

  const navItemsRight = (
    <>
      <label className="swap swap-rotate hover:text-purple-600 rounded-full ">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox"  checked={theme === "light" ? false : true}  onChange={(e)=>handleToggle(e)}/>

        {/* sun icon */}
        <svg
          className="swap-on fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-off fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </>
  );

  const navLogo = (
    <>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-purple-600"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L12.9499909,17 Z M18.9499909,12 C18.7183558,13.1411202 17.709479,14 16.5,14 C15.290521,14 14.2816442,13.1411202 14.0500091,12 L3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L14.0500091,11 C14.2816442,9.85887984 15.290521,9 16.5,9 C17.709479,9 18.7183558,9.85887984 18.9499909,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L18.9499909,12 Z M9.94999094,7 C9.71835578,8.14112016 8.70947896,9 7.5,9 C6.29052104,9 5.28164422,8.14112016 5.05000906,7 L3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L5.05000906,6 C5.28164422,4.85887984 6.29052104,4 7.5,4 C8.70947896,4 9.71835578,4.85887984 9.94999094,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L9.94999094,7 Z M7.5,8 C8.32842712,8 9,7.32842712 9,6.5 C9,5.67157288 8.32842712,5 7.5,5 C6.67157288,5 6,5.67157288 6,6.5 C6,7.32842712 6.67157288,8 7.5,8 Z M16.5,13 C17.3284271,13 18,12.3284271 18,11.5 C18,10.6715729 17.3284271,10 16.5,10 C15.6715729,10 15,10.6715729 15,11.5 C15,12.3284271 15.6715729,13 16.5,13 Z M10.5,18 C11.3284271,18 12,17.3284271 12,16.5 C12,15.6715729 11.3284271,15 10.5,15 C9.67157288,15 9,15.6715729 9,16.5 C9,17.3284271 9.67157288,18 10.5,18 Z"
        />
      </svg> */}
      <LogoImage />
    </>
  );
  return (
    <div className=" font-sans w-full m-0">
      <div className=" shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="cursor-pointer">
              {navLogo}
              <LogoText text={"Font Monster"}></LogoText>
            </div>

            <div className="hidden sm:flex sm:items-center">{navItems}</div>
            <div className="hidden sm:flex sm:items-center">
              {navItemsRight}
            </div>

            <div className="sm:hidden cursor-pointer"></div>
          </div>

          <div className="block sm:hidden bg-white border-t-2 py-2">
            <div className="flex flex-col">
              {navItems}
              <div className="flex justify-between items-center border-t-2 pt-2">
                {navItemsRight}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
