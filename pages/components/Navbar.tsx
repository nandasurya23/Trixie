import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  return (
    <nav className=" box-border bg-dark px-3 py-5 fixed w-full z-50 ">
      <div className="w-11/12  mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold flex items-center">
          <img
            src="https://ik.imagekit.io/lshkgi0dm/trixie/logo/Logo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670937740134"
            alt=""
            className="w-1/2"
          />
        </div>
        <ul className="text-white flex">
          <li className="mx-5 hover:text-gray2 cursor-pointer transition-all duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-5 hover:text-gray2 cursor-pointer transition-all duration-200">
            <Link href="/catalog">About</Link>
          </li>
          <li className="mx-5 hover:text-gray2 cursor-pointer transition-all duration-200">
            <Link href="/contact">Shop</Link>
          </li>
          <li className="mx-5 hover:text-gray2 cursor-pointer transition-all duration-200">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
