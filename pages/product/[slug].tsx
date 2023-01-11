/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { product } from "../api/data/product";
import { useState } from "react";
import clsx from "clsx";

export default function view() {
  const { query } = useRouter();
  const { slug } = query;
  const data = product.find((x) => x.slug === slug);
  if (!data) {
    return <div>PRODUK TIDAK DITEMUKAN</div>;
  }

  const settings = {
    arrows: false,
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-dark2 font-Montserrat text-white w-full">
        <div className={clsx("w-11/12 px-3 mx-auto py-32 ", "md:py-52")}>
          <div
            className={clsx(
              "flex flex-col justify-center items-center",
              "md:flex-row"
            )}
          >
            <div
              className={clsx(
                "flex flex-col w-full items-center justify-center",
                "md:flex-row md:w-1/2"
              )}
            >
              <div
                className={clsx("grid grid-cols-1 mb-10", "md:w-full md:mb-0")}
              >
                <Slider {...settings}>
                  <img
                    src={data.image}
                    alt=""
                    width={10}
                    className="rounded-md"
                  />
                  <img
                    src={data.image2}
                    alt=""
                    width={10}
                    className="rounded-md"
                  />
                  <img
                    src={data.image3}
                    alt=""
                    width={10}
                    className="rounded-md"
                  />
                </Slider>
              </div>
            </div>

            <div className="flex w-full flex-col space-y-4 self-start">
              <h1 className="text-3xl font-semibold">{data.name}</h1>
              <hr />
              <p className="text-3xl">
                {" "}
                Rp.{" "}
                {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </p>
              <hr />
              <p className="space-x-8">
                Ukuran :{" "}
                {data.size.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",")}
              </p>
              <hr />
              <p>{data?.desc}</p>
              <div className={clsx("flex justify-center", "md:justify-end")}>
                <button className="mt-3 bg-white px-10 py-1.5 text-lg text-dark rounded-md font-semibold hover:scale-105 transition-all duration-200">
                  <a
                    href="https://wa.me//085896131604"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pesan Sekarang
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
