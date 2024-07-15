import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Logo } from "../../assets/Icons/logo";
import { GreenButton } from "../../components/GreenButton";
import { SocialIcon1 } from "../../assets/Icons/social-1";
import { SocialIcon2 } from "../../assets/Icons/social-2";
import { SocialIcon3 } from "../../assets/Icons/social-3";
import { SocialIcon4 } from "../../assets/Icons/social-4";
export const MainLayout = () => {
  return (
    <>
      <header className="container flex py-10">
        <Logo width={"200px"} height={"54px"} />
        <div className="ml-36 font-roboto text-xl font-bold text-primary flex gap-10 items-center ">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/shop"}>Shop</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="container relative py-28">
        <img
          className="absolute"
          src="../src/assets/Images/homeImg12.jpg"
          alt="homeImg"
        />
        <div className="relative flex justify-between items-center py-[85px] px-[70px]">
          <h2 className="font-roboto font-extrabold text-white text-[50px] w-[357px]">
            Subscribe to our Newsletter
          </h2>
          <div className="relative">
            <GreenButton text={"Subscribe"} />
          </div>
        </div>
        <div className="flex justify-center pt-28">
          <div className="pr-[50px] text-end w-[300px]">
            <h3 className="text-3xl font-roboto font-bold text-primary mb-9">
              Contact Us
            </h3>
            <h4 className="font-sans font-bold text-lg text-darkSilver">
              Email
            </h4>
            <p className=" font-sans font-normal text-lg text-slate-400 mb-9">
              needhelp@Organia.com
            </p>
            <h4 className="font-sans font-bold text-lg text-darkSilver">
              Phone
            </h4>
            <p className=" font-sans font-normal text-lg text-slate-400 mb-9">
              666 888 888{" "}
            </p>
            <h4 className="font-sans font-bold text-lg text-darkSilver">
              Address
            </h4>
            <p className=" font-sans font-normal text-lg text-slate-400 mb-9">
              88 road, borklyn street, USA{" "}
            </p>
          </div>
          <div className="w-[543px] border-x-2 text-center">
            <div className="flex justify-center mb-6">
              <Logo width={"200px"} height={"54px"} />
            </div>
            <p className=" font-sans font-normal text-lg text-slate-400 mb-12">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing{" "}
            </p>
            <div className="flex justify-center gap-4 ">
              <SocialIcon1 width={60} height={60} />
              <SocialIcon2 width={60} height={60} />
              <SocialIcon3 width={60} height={60} />
              <SocialIcon4 width={60} height={60} />
            </div>
          </div>
          <div className="pl-[50px] text-start w-[300px]">
            <h3 className="text-3xl font-roboto font-bold text-primary mb-9">
              Utility Pages{" "}
            </h3>
            <p className=" font-sans font-normal text-lg text-slate-400 mb-6 ">
              Style Guide
            </p>{" "}
            <p className=" font-sans font-normal text-lg text-slate-400 mb-6 ">
              404 Not Found
            </p>{" "}
            <p className=" font-sans font-normal text-lg text-slate-400 mb-6 ">
              Password Protected
            </p>{" "}
            <p className=" font-sans font-normal text-lg text-slate-400 mb-6 ">
              Licences
            </p>{" "}
            <p className=" font-sans font-normal text-lg text-slate-400 mb-6 ">
              Changelog{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
