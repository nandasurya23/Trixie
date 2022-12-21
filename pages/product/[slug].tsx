import { useRouter } from "next/router";
import { product } from "../data/product";

export default function view() {
  const { query } = useRouter();
  const { slug } = query;
  const data = product.find((x) => x.slug === slug);
  if (!data) {
    return <div>PRODUK TIDAK DITEMUKAN</div>;
  }
  return (
    <>
      <section className="bg-dark2 font-Montserrat text-white w-full">
        <div className=" flex w-11/12 px-3 mx-auto py-52 ">
          <div className="flex flex-row items-center justify-between -mb-36">
            <div className="flex flex-col mx-10">
              <img className="w-96 ml-24 hover:scale-105 duration-200 transition-all rounded-md" src={data.image} alt="" />
            </div>
          </div>

          <div className="flex flex-wrap"></div>
          <div className="flex w-1/2 flex-col space-y-4">
            <h1 className="text-3xl font-semibold">{data.name}</h1>
            <hr />
            <p className="text-3xl"> Rp. {data.price}</p>
            <hr />
            <p className="space-x-8">Ukuran : {data.size}</p>
            <hr />
            <p>{data?.desc}</p>
            <div className="flex justify-end">
              <button className="mt-3 bg-white px-10 py-1.5 text-lg text-dark rounded-md font-semibold hover:scale-105 transition-all duration-200">
                <a href="https://wa.me//085896131604" target="_blank">Pesan Sekarang</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
