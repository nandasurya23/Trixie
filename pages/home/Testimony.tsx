/* eslint-disable @next/next/no-img-element */
import React from "react";

const Testimony = () => {
  return (
    <section className="bg-gradient-to-tr from-dark to-dark2 font-Montserrat text-white">
      <div className="w-11/12 px-3 mx-auto py-20">
        <h1 className="text-center font-bold text-5xl">
          Testimoni Pembeli Kami
        </h1>
        <div className="flex flex-row justify-around items-center mt-10">
          <div className="flex flex-col">
            <div className="text-center">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/trixie/asset_trixie/img/Ellipse_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670986488589"
                alt=""
                className="mx-auto"
              />
              <h4 className="font-semibold my-5">John Doe</h4>
              <p className="w-1/2 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                doloribus asperiores optio dignissimos voluptatibus iste amet
                eaque debitis ea magni?
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-center">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/trixie/asset_trixie/img/Ellipse_2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670986488589"
                alt=""
                className="mx-auto"
              />
              <h4 className="font-semibold my-5">Torri Kelly</h4>
              <p className="w-1/2 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                doloribus asperiores optio dignissimos voluptatibus iste amet
                eaque debitis ea magni?
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-center">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/trixie/asset_trixie/img/Ellipse_3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670986488589"
                alt=""
                className="mx-auto"
              />
              <h4 className="font-semibold my-5"> Bro Nadiem </h4>
              <p className="w-1/2 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                doloribus asperiores optio dignissimos voluptatibus iste amet
                eaque debitis ea magni?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
