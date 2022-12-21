/* eslint-disable @next/next/no-img-element */
const HeroSection = () => {
  return (
    <>
      <section id="home" className="bg-dark2 w-full">
        <div className="w-11/12 px-3 mx-auto pb-20 pt-10 font-Montserrat text-white">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-center">
              <h1 className="font-extrabold text-6xl leading-normal">
                Sepatu Lokal dan Vintage Termurah
              </h1>
              <p className="text-lg mt-3 font-normal mr-40">
                Bingung cari sepatu vintage dan lokal yang berkualitas? langsung
                beli di Trixie aja, dijamin aman, cepat, dan berkualitas!
              </p>
              <div className=" flex justify-start w-full mt-10">
                <button className="bg-white flex px-5 py-3 justify-start items-center text-dark2 text-lg font-medium rounded-md hover:scale-105 transition-all duration-200">
                  <a href="https://wa.me//085896131604" target="_blank">Pesan Sekarang</a>
                  <div className="ml-1">
                    <img
                      src="https://ik.imagekit.io/lshkgi0dm/trixie/icon/shop.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670939811305"
                      alt=""
                      className="w-6"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://ik.imagekit.io/js2tl91ey/Artikel_Trixie/chico_2?ik-sdk-version=javascript-1.4.3&updatedAt=1671421061279"
                alt=""
                className="w-full mt-24 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
