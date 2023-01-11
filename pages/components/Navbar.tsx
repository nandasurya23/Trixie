// import Link from "next/link";

// /* eslint-disable @next/next/no-img-element */
// const Navbar = () => {
//   return (
//     <nav className=" box-border bg-dark px-3 py-5 fixed w-full z-50 ">
//       <div className="w-11/12  mx-auto flex justify-between items-center">
//         <div className="text-white text-xl font-bold flex items-center">
//           <img
//             src="https://ik.imagekit.io/lshkgi0dm/trixie/logo/Logo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670937740134"
//             alt=""
//             className="w-1/2"
//           />
//         </div>
//         <ul className="text-white flex">
//           <li className="mx-5 hover:text-gray2 cursor-pointer transition-all duration-200">
//             <Link href="/">Home</Link>
//           </li>
//           <li className="mx-5 hover:text-gray2 cursor-pointer transition-all duration-200">
//             <Link href="#about" scroll = {false}>About</Link>
//           </li>
//           <li className="mx-5 hover:text-gray2 cursor-pointer transition-all duration-200">
//             <Link href="/shop">Shop</Link>
//           </li>
//           <li className="mx-5 hover:text-gray2 cursor-pointer transition-all duration-200">
//             <Link href="#footer" scroll = {false}>Contact</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section
      className={clsx(
        "box-border bg-dark px-3 py-5 fixed w-full z-50"
      )}
    >
      <div
        className={clsx(
          "mx-auto flex flex-wrap w-full justify-between items-center",
          "md:w-11/12 md:flex-nowrap "
        )}
      >
        <div className={clsx("text-white text-xl font-bold flex items-center w-1/2")}>
          <img
            src="https://ik.imagekit.io/lshkgi0dm/trixie/logo/Logo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670937740134"
            alt=""
            className={clsx("w-52", "md:w-44")}
          />
        </div>
        <FiMenu
          className={clsx("block h-6 w-6 cursor-pointer", "md:hidden")}
          color="white"
          onClick={() => setOpen(!open)}
        />
        <nav
          className={`${
            open ? "block" : "hidden"
          } md:flex md:items-center md:w-auto`}
        >
          <ul
            className={clsx(
              "text-white mt-5 space-y-3",
              "md:space-y-0 md:mt-0 md:flex"
            )}
          >
            <li className={clsx("mx-5 hover:text-gray2 cursor-pointer transition-all duration-200")}>
            <Link href="/">Beranda</Link>
            </li>
            <li className={clsx("mx-5 hover:text-gray2 cursor-pointer transition-all duration-200")}>
            <Link href="#about" scroll = {false}>Tentang Kami</Link>
            </li>
            <li className={clsx("mx-5 hover:text-gray2 cursor-pointer transition-all duration-200")}>
            <Link href="/shop">Katalog</Link>
            </li>
            <li className={clsx("mx-5 hover:text-gray2 cursor-pointer transition-all duration-200")}>
            <Link href="#footer" scroll = {false}>Kontak</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;