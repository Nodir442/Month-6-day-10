import React from "react";
import { productData } from "../../data/productData";
import { Link } from "react-router-dom";
import { YellowButton } from "../../components/YellowButton";
import { GreenButton } from "../../components/GreenButton";
import { HomeIcon1 } from "../../assets/Icons/homeIcon1";
import { HomeIcon2 } from "../../assets/Icons/homeIcon2";
import { StarIcon } from "../../assets/Icons/starIcon";
export const Home = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-[url('../src/assets/Images/Image.jpg')] h-[900px] w-full mb-[150px]"></div>
        <div className="absolute z-10 top-60 left-64 w-[530px]">
          <h3 className=" text-secondary font-yellowtail font-normal text-3xl mb-2">
            100% Natural Food
          </h3>
          <h2 className="font-roboto font-extrabold text-primary text-[80px] mb-6">
            Choose the best healthier way of life
          </h2>
          <YellowButton text={"Explore now"} />
        </div>
      </div>
      <div className="container flex gap-9 mb-[190px]">
        <div className="bg-[url('../src/assets/Images/homeImg1.jpg')] h-[367px] w-[682px] relative">
          <div className="absolute top-[109px] left-14 text-white w-[270px]">
            <p className="font-yellowtail text-4xl font-normal">Natural!!</p>
            <h3 className="font-roboto text-[40px] font-extrabold">
              Get Garden Fresh Fruits
            </h3>
          </div>
        </div>
        <div className="bg-[url('../src/assets/Images/homeImg2.jpg')] h-[367px] w-[682px] relative">
          <div className="absolute top-[109px] left-14 w-[270px]">
            <p className="font-yellowtail text-4xl text-secondary font-normal">
              Natural!!
            </p>
            <h3 className="font-roboto text-[40px] text-primary font-extrabold">
              Get Garden Fresh Fruits
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(249, 248, 248, 1)] py-24">
        {" "}
        <div className="container flex">
          <img
            className="h-[867px] w-[911px]"
            src="../src/assets/Images/homeImg3.jpg"
            alt="homeImg"
          />
          <div className=" h-[702px] w-[682px] mt-[90px] ml-[-60px]">
            <p className=" text-secondary font-yellowtail font-normal text-3xl mb-2">
              About Us
            </p>
            <h2 className="font-roboto font-extrabold text-primary text-[50px] mb-4">
              We Believe in Working Accredited Farmers
            </h2>
            <p className="font-sans font-normal text-lg text-darkSilver leading-7 mb-12">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div>
              {" "}
              <div className="flex gap-5 items-center mb-12">
                <HomeIcon1 width={"101px"} height={"101px"} />
                <div className="w-[444px]">
                  <h4 className="font-roboto text-2xl font-extrabold text-primary ">
                    Organic Foods Only
                  </h4>
                  <p className="font-sans font-normal text-lg text-darkSilver leading-7">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center mb-12">
                <HomeIcon2 width={"101px"} height={"101px"} />
                <div className="w-[444px]">
                  <h4 className="font-roboto text-2xl font-extrabold text-primary ">
                    Quality Standards{" "}
                  </h4>
                  <p className="font-sans font-normal text-lg text-darkSilver leading-7">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </div>
              <GreenButton text={"Shop Now"} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-28 text-center">
        <p className=" text-secondary font-yellowtail font-normal text-3xl mb-2">
          Categories{" "}
        </p>
        <h2 className="font-roboto font-extrabold text-primary text-[50px] mb-10">
          Our Products{" "}
        </h2>
        <div className="container flex flex-wrap  justify-between gap-y-5 ">
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
        <div className="flex justify-center mt-14">
          {" "}
          <GreenButton text={"Load More"} />
        </div>
      </div>
      <div className="relative h-[1000px]">
        <img
          className="absolute object-cover h-full"
          src="../src/assets/Images/homeImg4.jpg"
          alt="homeImg"
        />
        <div className="container relative pt-32 pb-16 text-center w-[800px] border-b-[1px]">
          <p className=" text-secondary font-yellowtail font-normal text-3xl mb-2">
            Testimonial
          </p>
          <h2 className="font-roboto font-extrabold text-primary text-[50px] mb-16">
            What Our Customer Saying?
          </h2>
          <img
            className="mx-auto w-[115px] h-[115px]"
            src="../src/assets/Images/homeImg5.jpg"
            alt=""
          />
          <div className="flex relative mx-[328px] my-5">
            <StarIcon width={"25px"} height={"25px"} />
            <StarIcon width={"25px"} height={"25px"} />
            <StarIcon width={"25px"} height={"25px"} />
            <StarIcon width={"25px"} height={"25px"} />
            <StarIcon width={"25px"} height={"25px"} />
          </div>
          <p className="font-sans font-normal text-lg text-darkSilver leading-7 mb-5">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <h3 className="font-roboto text-2xl font-semibold text-primary">
            Sara Taylor
          </h3>
          <p className="font-sans font-normal text-lg text-darkSilver leading-7">
            Consumer
          </p>
        </div>
        <div className="container relative flex justify-between w-[930px] mt-9">
          <div className="w-52 h-52 border-[5px] rounded-[50%] border-secondary bg-slate-200 text-center">
            <h2 className="font-roboto font-extrabold text-primary text-[50px] mt-14">
              100%{" "}
            </h2>
            <p className="text-lg text-primary mt-[-15px] font-semibold font-sans">
              Organic
            </p>
          </div>
          <div className="w-52 h-52 border-[5px] rounded-[50%] border-secondary bg-slate-200 text-center">
            <h2 className="font-roboto font-extrabold text-primary text-[50px] mt-14">
              285{" "}
            </h2>
            <p className="text-lg text-primary mt-[-15px] font-semibold font-sans">
              Active Product{" "}
            </p>
          </div>
          <div className="w-52 h-52 border-[5px] rounded-[50%] border-secondary bg-slate-200 text-center">
            <h2 className="font-roboto font-extrabold text-primary text-[50px] mt-14">
              350+{" "}
            </h2>
            <p className="text-lg text-primary mt-[-15px] font-semibold font-sans">
              Organic Orchads{" "}
            </p>
          </div>
          <div className="w-52 h-52 border-[5px] rounded-[50%] border-secondary bg-slate-200 text-center">
            <h2 className="font-roboto font-extrabold text-primary text-[50px] mt-14">
              25+{" "}
            </h2>
            <p className="text-lg text-primary mt-[-15px] font-semibold font-sans">
              Years of Farming{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img
          className="w-[50%]"
          src="../src/assets/Images/homeImg6.jpg"
          alt="homeImg"
        />
        <div className="h-[650px] w-[700px] ml-[-100px] bg-white rounded-3xl p-16">
          <p className=" text-secondary font-yellowtail font-normal text-3xl mb-2">
            Eco Friendly{" "}
          </p>
          <h2 className="font-roboto font-extrabold text-primary text-[50px] mb-8">
            Econis is a Friendly Organic Store{" "}
          </h2>
          <h3 className="font-roboto text-xl font-semibold text-primary">
            Start with Our Company First{" "}
          </h3>
          <p className="font-sans font-normal text-lg text-darkSilver leading-7 mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
          <h3 className="font-roboto text-xl font-semibold text-primary">
            Learn How to Grow Yourself{" "}
          </h3>
          <p className="font-sans font-normal text-lg text-darkSilver leading-7 mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
          <h3 className="font-roboto text-xl font-semibold text-primary">
            Farming Strategies of Today{" "}
          </h3>
          <p className="font-sans font-normal text-lg text-darkSilver leading-7 mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
      </div>
      <div className="bg-slate-200 py-44 flex justify-between">
        <div className="relative text-center w-[482px] h-[482px] cursor-pointer">
          <img
            className="absolute w-full h-full"
            src="../src/assets/Images/homeImg7.jpg"
            alt="homeImg"
          />
          <h3 className="relative bg-white py-8 w-[220px] font-roboto font-medium text-lg text-darkSilver mx-auto mt-52 rounded-3xl">
            Organic Juice
          </h3>
        </div>
        <div className="relative text-center w-[482px] h-[482px] cursor-pointer">
          <img
            className="absolute w-full h-full"
            src="../src/assets/Images/homeImg8.jpg"
            alt="homeImg"
          />
          <h3 className="relative bg-white py-8 w-[220px] font-roboto font-medium text-lg text-darkSilver mx-auto mt-52 rounded-3xl">
            Organic Food{" "}
          </h3>
        </div>
        <div className="relative text-center w-[482px] h-[482px] cursor-pointer">
          <img
            className="absolute w-full h-full"
            src="../src/assets/Images/homeImg9.jpg"
            alt="homeImg"
          />
          <h3 className="relative bg-white py-8 w-[220px] font-roboto font-medium text-lg text-darkSilver mx-auto mt-52 rounded-3xl">
            Nuts Cookis{" "}
          </h3>
        </div>
      </div>
      <div className="container  py-36">
        <div className="flex justify-between mb-7">
          <div className="w-[702px]">
            <p className=" text-secondary font-yellowtail font-normal text-3xl mb-2">
              News
            </p>
            <h2 className="font-roboto font-extrabold text-primary text-[50px]">
              Discover weekly content about organic food, & more{" "}
            </h2>
          </div>
          <div className="mt-auto mb-4">
            <GreenButton text={"More News"} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="relative w-[670px] h-[520px]">
            <img
              className="absolute w-full h-full"
              src="../src/assets/Images/homeImg10.jpg"
              alt="homeImg"
            />
            <div className="p-2 mt-11 ml-8 bg-white relative w-20 h-20 text-center rounded-full">
              <p className=" font-roboto text-2xl font-extrabold text-primary">
                25 <span className="text-xl">Nov</span>
              </p>
            </div>
            <div className="relative w-[610px] h-[330px] bg-white mx-auto mt-28 pt-11 px-14  rounded-[30px] drop-shadow-2xl">
              <div>
                <p className="font-roboto font-normal text-lg text-darkSilver leading-7 mb-4">
                  By Rachi Card
                </p>
              </div>
              <h2 className="font-roboto font-extrabold text-primary text-[25px]">
                The Benefits of Vitamin D & How to Get It{" "}
              </h2>
              <p className="font-sans font-normal text-lg text-darkSilver leading-7 mb-4">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <YellowButton text={"Read More"} />
            </div>
          </div>
          <div className="relative w-[670px] h-[520px] ">
            <img
              className="absolute w-full h-full"
              src="../src/assets/Images/homeImg11.jpg"
              alt="homeImg"
            />
            <div className="p-2 mt-11 ml-8 bg-white relative w-20 h-20 text-center rounded-full">
              <p className=" font-roboto text-2xl font-extrabold text-primary">
                25 <span className="text-xl">Nov</span>
              </p>
            </div>
            <div className="relative w-[610px] h-[330px] bg-white mx-auto mt-28 pt-11 px-14  rounded-[30px] drop-shadow-2xl">
              <div>
                <p className="font-roboto font-normal text-lg text-darkSilver leading-7 mb-4">
                  By Rachi Card
                </p>
              </div>
              <h2 className="font-roboto font-extrabold text-primary text-[25px]">
                Our Favourite Summertime Tommeto{" "}
              </h2>
              <p className="font-sans font-normal text-lg text-darkSilver leading-7 mb-4">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <YellowButton text={"Read More"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
