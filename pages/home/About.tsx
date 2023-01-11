/* eslint-disable @next/next/no-img-element */
import React from "react";
import clsx from "clsx";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-dark to-dark2 font-Montserrat text-white py-20"
    >
      <div className="w-11/12 px-3 mx-auto">
        <h1 className={clsx("text-center text-2xl font-bold", "md:text-5xl")}>Tentang Kami</h1>
        <p className="py-10 text-center font-medium text-lg">
          Trixie Footwear merupakan salah satu online shop yang menjual berbagai
          jenis sepatu vintage dan lokal.
        </p>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          <div className="flex flex-col text-center">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/trixie/asset_trixie/icon/Checked-box.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670986693001"
              alt=""
              className="w-12 mx-auto"
            />
            <p className="font-normal  mt-3">
              Produk yang kami jual dapat dipercaya keasliannya yang dibuktikan
              oleh beberapa testimoni pelanggan
            </p>
          </div>

          <div className="flex flex-col text-center">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/trixie/asset_trixie/icon/Shopping-bag.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670986693001"
              alt=""
              className="w-12 mx-auto"
            />
            <p className="font-normal mt-3">
              Dapat dipastikan produk kami aman tidak ada kerusakan dan bisa
              ajukan penukaran
            </p>
          </div>

          <div className="flex flex-col text-center">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/trixie/asset_trixie/icon/Clock.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670986693001"
              alt=""
              className="w-12 mx-auto"
            />
            <p className="font-normal  mt-3">
              Pengiriman produk berlangsung cepat dari pengiriman biasanya
            </p>
          </div>

          <div className="flex flex-col text-center">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/trixie/asset_trixie/icon/Lightning.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670986488824"
              alt=""
              className="w-12 mx-auto"
            />
            <p className="font-normal mt-3">
              Kami sangat fast respon 24 jam dalam melayani customer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
