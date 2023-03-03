/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
const HeroSection = () => {
  return (
    <>
      <section id="home" className={clsx("bg-dark2 w-full")}>
        <div
          className={clsx(
            "w-11/12 px-3 mx-auto pb-20 pt-10 font-Montserrat text-white"
          )}
        >
          <div
            className={clsx(
              "flex flex-col-reverse justify-between items-center",
              "md:flex-row"
            )}
          >
            <div className={clsx("flex flex-col items-center")}>
              <h1
                className={clsx(
                  "font-extrabold text-2xl leading-normal text-center mt-5",
                  "md:text-6xl md:text-left md:mt-0"
                )}
              >
                Sepatu Lokal dan Vintage Termurah
              </h1>
              <p
                className={clsx(
                  "text-center mt-3 font-normal ",
                  "md:text-left md:mr-40"
                )}
              >
                Bingung cari sepatu vintage dan lokal yang berkualitas? langsung
                beli di Trixie aja, dijamin aman, cepat, dan berkualitas!
              </p>
              <div
                className={clsx(
                  " flex justify-center w-full mt-10",
                  "md:justify-start"
                )}
              >
                <button
                  className={clsx(
                    "bg-white flex px-5 py-3 justify-start items-center text-dark2 text-lg font-medium rounded-md hover:scale-105 transition-all duration-200"
                  )}
                >
                  <a
                    href="https://wa.me//085896131604"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pesan Sekarang
                  </a>
                  <div className={clsx("ml-1")}>
                    <img
                      src="https://ik.imagekit.io/lshkgi0dm/trixie/icon/shop.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670939811305"
                      alt=""
                      className={clsx("w-6")}
                    />
                  </div>
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://ik.imagekit.io/js2tl91ey/Artikel_Trixie/chico_2?ik-sdk-version=javascript-1.4.3&updatedAt=1671421061279"
                alt=""
                className={clsx("w-full mt-24 rounded-lg")}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
