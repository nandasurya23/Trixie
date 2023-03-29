/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark2 w-full font-Montserrat text-white">
      <div className="w-11/12 px-3 mx-auto py-20">
        <div
          className={clsx(
            "flex flex-col items-start justify-between",
            "md:flex-row md:items-center"
          )}
        >
          <div className="flex flex-col w-full">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/trixie_logo_putih.svg?updatedAt=1680079612664"
              alt=""
              className={clsx("w-16", "md:w-24")}
            />
            <div className="w-1/4 bg-gray2 p-[1px] mt-7"></div>
            <p className={clsx("text-lg font-medium mt-5 w-1/6", "md:text-xl")}>
              Kapal, Badung 80351, Bali, Indonesia
            </p>
          </div>
          <div className="flex flex-col w-1/4">
            <h3 className="my-5 text-lg">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about" scroll={false}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="#help">Help</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-1/4">
            <h3 className="my-5 text-lg">Temukan Kami</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/trixiefootwear/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Trixie_Footwear?t=kn3zE7oZIjxV2bABC7Y2vA&s=09"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me//085896131604"
                  target="_blank"
                  rel="noreferrer"
                >
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-gray2 p-[1px] mt-10"></div>
        <p className="text-center text-sm mt-5">
          ©Trixie Footwear 2022. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
