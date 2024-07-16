import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { productData } from "../../data/productData";
import { StarIcon } from "../../assets/Icons/starIcon";
import { GreenButton } from "../../components/GreenButton";

export const ShopSingle = () => {
  const { id } = useParams();
  const data = productData.find((item) => item.id == id);

  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="relative w-full h-[450px] flex  items-center justify-center">
        <img
          className="absolute"
          src="../src/assets/Images/shopSingleBanner.jpg"
          alt="aboutImg"
        />
        <h2 className="relative font-roboto font-extrabold text-primary text-[80px]">
          Shop Single
        </h2>
      </div>
      <div className="w-[1137px] relative mx-auto flex items-center">
        <img className="w-[591px] " src={data.img} alt={data.name} />
        <p className="absolute top-24 left-9 font-sans font-semibold bg-primary py-[6px] px-3 inline-block text-white text-base rounded-xl">
          {data.categories}
        </p>
        <div className="w-[658px]">
          <h3 className="font-roboto font-semibold text-primary text-[40px]">
            {data.name}
          </h3>
          <div className="flex mb-3">
            <StarIcon width={20} height={20} />
            <StarIcon width={20} height={20} />
            <StarIcon width={20} height={20} />
            <StarIcon width={20} height={20} />
            <StarIcon width={20} height={20} />
          </div>
          <div className="flex items-center gap-3 mb-7">
            {" "}
            <p className="font-sans font-semibold text-[15px] text-slate-300 line-through">
              $ {data.oldPrice}.00
            </p>
            <p className="font-sans font-bold text-lg text-primary">
              ${data.newPrice}.00
            </p>
          </div>
          <p className="font-sans font-normal text-lg text-darkSilver leading-7 mb-10">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <GreenButton text={"Add To Cart"} />
        </div>
      </div>
      <div className="text-center mb-20">
        <h2 className="font-roboto font-extrabold text-primary text-[50px] mb-4">
          Product Description{" "}
        </h2>
        <p className="font-sans font-normal text-lg text-darkSilver leading-7 mb-10">
          {data.description}
          </p>
      </div>
      <div className="container flex flex-wrap justify-between gap-y-5 ">
        {productData.map((item) => (
          <Link to={`/shop-single/${item.id}`} key={item.id}>
            <div className="relative w-[335px] h-[500px] border-[2px] rounded-3xl">
              <img
                className="w-full rounded-3xl"
                src={item.img}
                alt="productImg"
              />
              <p className="absolute top-9 left-9 font-sans font-semibold bg-primary py-[6px] px-3 inline-block text-white text-base rounded-xl">
                {item.categories}
              </p>
              <h4 className="absolute top-[400px] left-[30px] w-[280px] pb-3 font-roboto font-semibold text-xl text-primary border-b-2 ">
                {item.name}
              </h4>
              <div className="w-[297px] flex items-center gap-2 absolute top-[444px] left-8 mt-2 pb-5">
                <p
                  className="font-sans font-semibold text-[15px] text-slate-300 line-through
"
                >
                  $ {item.oldPrice}.00
                </p>
                <p className="font-sans font-bold text-lg text-primary">
                  ${item.newPrice}.00
                </p>
                <div className="mr-4 ml-auto flex">
                  <StarIcon width={20} height={20} />
                  <StarIcon width={20} height={20} />
                  <StarIcon width={20} height={20} />
                  <StarIcon width={20} height={20} />
                  <StarIcon width={20} height={20} />
                </div>{" "}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
