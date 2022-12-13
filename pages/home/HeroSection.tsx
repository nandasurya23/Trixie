/* eslint-disable @next/next/no-img-element */
const HeroSection = () => {
  return (
    <>
      <section className="bg-dark2 w-full">
        <div className="w-11/12 px-3 mx-auto py-20 font-Montserrat text-white">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-center">
              <h1 className="font-extrabold text-5xl leading-normal">
                Sepatu Lokal dan Vintage Termurah
              </h1>
              <p className="text-lg mt-3 font-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente, numquam culpa voluptates eius voluptate consectetur
                asperiores enim molestiae aliquam delectus.
              </p>
              <div className=" flex justify-start w-full mt-10">
                <button className="bg-white flex px-5 py-3 justify-start items-center text-dark2 text-lg font-medium rounded-md hover:scale-105 transition-all duration-200">
                  Pesan Sekarang
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
                src="https://ik.imagekit.io/lshkgi0dm/trixie/assets/hero-large.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670939685769"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
