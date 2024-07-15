import React from "react";
import { productData } from "../../data/productData";
import { Link } from "react-router-dom";
import { StarIcon } from "../../assets/Icons/starIcon";

export const Shop = () => {
  return (
    <>
      <div className="relative w-full h-[450px] flex  items-center justify-center">
        <img
          className="absolute"
          src="../src/assets/Images/shopBanner.jpg"
          alt="aboutImg"
        />
        <h2 className="relative font-roboto font-extrabold text-primary text-[80px]">
          Shop
        </h2>
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
