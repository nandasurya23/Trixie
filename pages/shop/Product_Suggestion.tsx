import React from "react";

const Product_Suggestion = () => {
  return (
    <section className="bg-dark2 font-Montserrat text-white">
      <div className="w-11/12 px-3 mx-auto py-20">
        <div className="text-center">
          <h2 className="text-5xl font-semibold my-5 w-1/2 mx-auto">
            Product Suggestions
          </h2>
          <p className="w-1/2 mx-auto mt-14">
            Jika kamu punya saran sepatu yang kamu inginkan bisa langsung
            mengisi kotak saran yang ada dibawah, Jangan lupa follow instagram
            kami, have fun :)
          </p>
        </div>

        <form action="" className="mx-auto w-full">
          <div className=" flex flex-col justify-center items-center">
            <div className="flex justify-start items-start">
              <label htmlFor="" className="my-4 text-white">
                Email
              </label>
            </div>

            <input
              type="text"
              placeholder="email"
              className="w-1/3 rounded-md px-3 py-2 text-dark outline-none"
            />
            <label htmlFor="" className="my-4 text-white">
              Saran
            </label>
            <input
              type="text"
              placeholder="saran"
              className="w-1/3 rounded-md px-3 py-2 text-dark outline-none"
            />
            <div className="flex justify-end">
              <button className="font-semibold bg-white px-10 py-1.5 text-dark mt-8 rounded-md hover:scale-105 transition-all duration-200">
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Product_Suggestion;
