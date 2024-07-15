import React from "react";
import { GreenButton } from "../../components/GreenButton";
import { AboutIcon1 } from "../../assets/Icons/aboutIcon1";
import { AboutIcon2 } from "../../assets/Icons/aboutIcon2";
import { AboutCircleIcon } from "../../assets/Icons/about-circle";
import { AboutServiceIcon1 } from "../../assets/Icons/about-service-1";
import { AboutServiceIcon2 } from "../../assets/Icons/about-service-2";
import { AboutServiceIcon3 } from "../../assets/Icons/about-service-3";
import { AboutServiceIcon4 } from "../../assets/Icons/about-service-4";
import { SocialIcon1 } from "../../assets/Icons/social-1";
import { SocialIcon2 } from "../../assets/Icons/social-2";
import { SocialIcon3 } from "../../assets/Icons/social-3";
import { SocialIcon4 } from "../../assets/Icons/social-4";

export const About = () => {
  return (
    <>
      <div className="relative w-full h-[450px] flex  items-center justify-center">
        <img
          className="absolute"
          src="../src/assets/Images/aboutImg1.jpg"
          alt="aboutImg"
        />
        <h2 className="relative font-roboto font-extrabold text-primary text-[80px]">
          About Us
        </h2>
      </div>
      <div className="container flex mb-32">
        <img
          className="w-[921px] h-[664px] ml-[-100px]"
          src="../src/assets/Images/aboutImg2.jpg"
          alt="aboutImg"
        />
        <div className="w-[682px] mt-[30px]">
          <p className=" text-secondary font-yellowtail font-normal text-3xl mb-2">
            About Us
          </p>
          <h2 className="font-roboto font-extrabold text-primary text-[50px] mb-4">
            We do Creative Things for Success{" "}
          </h2>
          <p className="font-sans font-normal text-lg text-darkSilver leading-7 mb-5">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <p className="font-sans font-normal text-lg text-darkSilver leading-7 mb-5">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div>
            {" "}
            <div className="flex my-7">
              {" "}
              <div className="flex items-center w-[300px] mb-5">
                <AboutIcon1 width={"56px"} height={"56px"} />
                <h4 className="font-roboto text-2xl font-extrabold text-primary ml-4 ">
                  Modern Agriculture Equipment
                </h4>
              </div>
              <div className="flex items-center w-[300px] mb-5">
                <AboutIcon2 width={"56px"} height={"56px"} />
                <h4 className="font-roboto text-2xl font-extrabold text-primary ml-4 ">
                  No growth hormones are used{" "}
                </h4>
              </div>
            </div>
            <GreenButton text={"Explore More"} />
          </div>
        </div>
      </div>

      <div className="py-44 bg-slate-200">
        <div className="container flex justify-between">
          <div className="w-[670px]">
            {" "}
            <p className=" text-secondary font-yellowtail font-normal text-3xl mb-2">
              Why Choose us?{" "}
            </p>
            <h2 className="font-roboto font-extrabold text-primary text-[50px] mb-6">
              We do not buy from the open market & traders.{" "}
            </h2>
            <p className="font-sans font-normal text-lg text-darkSilver leading-7 mb-9  ">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div className="w-[340px] h-[80px] bg-slate-300 rounded-[40px] flex justify-start items-center p-7">
              <AboutCircleIcon width={20} height={20} />
              <p className="font-medium text-xl font-roboto text-primary ml-2">
                100% Natural Product
              </p>
            </div>
            <p className="font-sans font-normal text-lg w-[444px] text-darkSilver leading-7 mt-3 mb-6 ml-12 ">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>{" "}
            <div className="w-[340px] h-[80px] bg-slate-300 rounded-[40px] flex justify-start items-center p-7">
              <AboutCircleIcon width={20} height={20} />
              <p className="font-medium text-xl font-roboto text-primary ml-2">
                Increases resistance{" "}
              </p>
            </div>
            <p className="font-sans font-normal text-lg w-[444px] text-darkSilver leading-7 mt-3 mb-6 ml-12 ">
              Filling, and temptingly healthy, our Biona Organic Granola with
              Wild Berries is just the thing
            </p>{" "}
          </div>
          <img
            className="w-[670px] rounded-[30px]"
            src="../src/assets/Images/aboutImg7.jpg"
            alt="aboutImg"
          />
        </div>
        <div className="w-[1120px] mx-auto flex justify-between mt-24">
          <div className="w-[257px] h-[335px] bg-white rounded-3xl text-center drop-shadow-xl px-6">
            <div className="flex justify-center mt-[50px] drop-shadow-md">
              <AboutServiceIcon1 width={95} height={95} />
            </div>
            <h2 className="font-roboto font-extrabold text-primary text-[25px] mt-4 mb-3">
              Return Policy{" "}
            </h2>
            <p className="font-sans font-normal text-lg text-darkSilver leading-7 ">
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
          <div className="w-[257px] h-[335px] bg-white rounded-3xl text-center drop-shadow-xl px-6">
            <div className="flex justify-center mt-[50px] drop-shadow-md">
              <AboutServiceIcon2 width={95} height={95} />
            </div>
            <h2 className="font-roboto font-extrabold text-primary text-[25px] mt-4 mb-3">
              100% Fresh{" "}
            </h2>
            <p className="font-sans font-normal text-lg text-darkSilver leading-7 ">
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
          <div className="w-[257px] h-[335px] bg-white rounded-3xl text-center drop-shadow-xl px-6">
            <div className="flex justify-center mt-[50px] drop-shadow-md">
              <AboutServiceIcon3 width={95} height={95} />
            </div>
            <h2 className="font-roboto font-extrabold text-primary text-[25px] mt-4 mb-3">
              Support 24/7{" "}
            </h2>
            <p className="font-sans font-normal text-lg text-darkSilver leading-7 ">
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
          <div className="w-[257px] h-[335px] bg-white rounded-3xl text-center drop-shadow-xl px-6">
            <div className="flex justify-center mt-[50px] drop-shadow-md">
              <AboutServiceIcon4 width={95} height={95} />
            </div>
            <h2 className="font-roboto font-extrabold text-primary text-[25px] mt-4 mb-3">
              Secured Payment
            </h2>
            <p className="font-sans font-normal text-lg text-darkSilver leading-7 ">
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center py-32">
        <div className="w-[850px] mx-auto mb-11">
          <p className=" text-secondary font-yellowtail font-normal text-3xl mb-2">
            Team{" "}
          </p>
          <h2 className="font-roboto font-extrabold text-primary text-[50px] mb-4">
            Our Organic Experts{" "}
          </h2>
          <p className="font-sans font-normal text-lg text-darkSilver leading-7 ">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.{" "}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="w-[450px] h-[615px] bg-slate-200 rounded-[30px] text-start hover:bg-white drop-shadow-lg transition-all duration-300 hover:drop-shadow-2xl ">
            <img
              className="rounded-t-[30px]"
              src="../src/assets/Images/aboutImg8.jpg"
              alt="aboutImg"
            />
            <div className="py-6 px-7 flex justify-between items-end">
              <div>
                <h2 className="font-roboto font-extrabold text-primary text-[25px]">
                  Giovani Bacardo{" "}
                </h2>
                <p className="font-yellowtail font-normal text-2xl text-secondary">
                  Farmer
                </p>
              </div>
              <div className="flex gap-2">
                <SocialIcon2 width={50} height={50} />
                <SocialIcon3 width={50} height={50} />
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[615px] bg-slate-200 rounded-[30px] text-start hover:bg-white drop-shadow-lg transition-all duration-300 hover:drop-shadow-2xl ">
            <img
              className="rounded-t-[30px]"
              src="../src/assets/Images/aboutImg9.jpg"
              alt="aboutImg"
            />
            <div className="py-6 px-7 flex justify-between items-end">
              <div>
                <h2 className="font-roboto font-extrabold text-primary text-[25px]">
                  Marianne Loreno{" "}
                </h2>
                <p className="font-yellowtail font-normal text-2xl text-secondary">
                  Designer{" "}
                </p>
              </div>
              <div className="flex gap-2">
                <SocialIcon1 width={50} height={50} />
                <SocialIcon2 width={50} height={50} />
                <SocialIcon3 width={50} height={50} />
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[615px] bg-slate-200 rounded-[30px] text-start hover:bg-white drop-shadow-lg transition-all duration-300 hover:drop-shadow-2xl ">
            <img
              className="rounded-t-[30px]"
              src="../src/assets/Images/aboutImg10.jpg"
              alt="aboutImg"
            />
            <div className="py-6 px-7 flex justify-between items-end">
              <div>
                <h2 className="font-roboto font-extrabold text-primary text-[25px]">
                  Riga Pelore{" "}
                </h2>
                <p className="font-yellowtail font-normal text-2xl text-secondary">
                  Farmer
                </p>
              </div>
              <div className="flex gap-2">
                <SocialIcon1 width={50} height={50} />
                <SocialIcon2 width={50} height={50} />
                <SocialIcon3 width={50} height={50} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[800px] bg-primary  py-40 text-center">
        <p className=" text-secondary font-yellowtail font-normal text-3xl mb-2">
          About Us
        </p>
        <h2 className="font-roboto font-extrabold text-white text-[50px] mb-4">
          What We Offer for You{" "}
        </h2>
        <div className="container flex justify-between">
          <div className="text-center cursor-pointer">
            <img
              className="w-[330px] h-[310px] rounded-3xl"
              src="../src/assets/Images/aboutImg3.jpg"
              alt="aboutImg"
            />
            <p className="font-roboto text-2xl font-medium mt-6 text-white">
              Spicy
            </p>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="w-[330px] h-[310px] rounded-3xl"
              src="../src/assets/Images/aboutImg4.jpg"
              alt="aboutImg"
            />
            <p className="font-roboto text-2xl font-medium mt-6 text-white">
              Nuts & Feesd{" "}
            </p>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="w-[330px] h-[310px] rounded-3xl"
              src="../src/assets/Images/aboutImg5.jpg"
              alt="aboutImg"
            />
            <p className="font-roboto text-2xl font-medium mt-6 text-white">
              Fruits{" "}
            </p>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="w-[330px] h-[310px] rounded-3xl"
              src="../src/assets/Images/aboutImg6.jpg"
              alt="aboutImg"
            />
            <p className="font-roboto text-2xl font-medium mt-6 text-white">
              Vegetable{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
