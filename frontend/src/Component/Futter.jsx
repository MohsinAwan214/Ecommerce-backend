import React from "react";
import { VscSend } from "react-icons/vsc";
import QrCode from "../assets/images/QrImg.png";
import GooglePlay from "../assets/images/GooglePlay.png";
import { FaApple } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { PiTwitterLogo } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";
import { PiCopyrightLight } from "react-icons/pi";

export default function Futter() {
  return (
    <div className="bg-black text-[#FAFAFA] min-h-[440px] gap-14 w-full relative overflow-hidden bg-center flex-col">
      <div className=" flex  w-full  ml-1  min-h-[200px] flex-wrap margin justify-between p-10">
      
        <div className=" h-[132px] flex flex-col gap-3 w-40 ">
          <h1 className="font-bold tracking-wider text-[20px]">Exclusive</h1>
          <span className=" tracking-wider font-medium">
            Subscribe
          </span>
          <p className="text-[10px]  tracking-wider">
            Get 10% off your first order
          </p>

          <div className="h-9 w-36 border-[#FAFAFA] border-[1px] rounded flex items-center  text-white">
            <input
              type="search"
              placeholder="Enter your email"
              className="bg-transparent w-28 p-2 outline-none text-[12px] "
            />
            <button className="text-[18px]">
              <VscSend />
            </button>
          </div>
        </div>

        {/* 2 */}

        <div className=" h-[132px] flex flex-col gap-4 w-36 ">
          <h1 className="font-bold text-[20px] tracking-wider ">Support</h1>
          <div className="h-[110px]  text-[12px] gap-3 flex flex-col">
            <span className="tracking-wider">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </span>
            <p className="text-[13px] tracking-wider ">exclusive@gmail.com</p>
            <p className=" tracking-wider">+88015-88888-9999</p>
          </div>
        </div>

        {/* 3 */}

        <div className=" h-[158px] flex flex-col gap-4 w-26  ">
          <h1 className="font-bold text-[20px] tracking-wider">Account</h1>
          <div className="flex flex-col gap-4 text-[12px]">
            <span className=" tracking-wider font-medium">My Account</span>
            <span className=" tracking-wider">Login / Register</span>
            <span className=" tracking-wider">Cart</span>
            <span className=" tracking-wider">Wishlist</span>
            <span className=" tracking-wider">Shop</span>
          </div>
        </div>

        {/* 4 */}

        <div className=" h-[136px] flex flex-col gap-4 w-26  ">
          <h1 className="font-bold text-[20px] tracking-wider">Quick Link</h1>
          <div className="flex flex-col gap-4 text-[12px]">

          <span className="text-[12px] tracking-wider font-medium">
            Privacy Policy
          </span>
          <span className=" tracking-wider">Terms Of Use</span>
          <span className=" tracking-wider">FAQ</span>
          <span className=" tracking-wider">Contact</span>
        </div>
          </div>

        <div className=" h-[180px] flex flex-col gap-2 w-26 ">
          <h1 className="font-bold tracking-wider text-[20px]">Download App</h1>
          <span className="text-[9px] tracking-wider font-medium text-[#FAFAFA] opacity-70">
            Save $3 with App New User Only
          </span>

          <div className="flex">
            
            
          
            <img src={QrCode} alt="qr code img" className="h-[60px] "/>
          
            <div className=" ">
              <div className="">
              <img src={GooglePlay} className="h-[30px]" alt="play store img" />
              </div>
              <div className="flex rounded-[5px] py-[2px] w-[79px] ml-[3px]  border-[0.5px]">
                <FaApple className="text-[20px] "/>
                <div className=" ">
                  <div className="text-[6px] tracking-wider">Download on the</div>
                  <div className="font-bold tracking-wider text-[10px] leading-3">App Store</div>
                </div>
              </div>
            </div>
          </div>
<div className="w-28 h-6 flex justify-between text-[17px] gap-4 mt-3">
  <div>
<RiFacebookLine/>
  </div>
  <div>
<PiTwitterLogo/>
  </div>
  <div>
<IoLogoInstagram/>
  </div>
  <div>
<RiLinkedinLine/>
  </div>
</div>
        </div>

      </div>
      <div
       className=" bottom-5  flex gap-1 text-[#FFFFFF] mt-12 border-t pt-5 h-11 w-full justify-center items-center">
        <div className="pt-1 opacity-30">
        <PiCopyrightLight/>
        </div>
        <span className="opacity-20">
        Copyright Rimel 2022. All right reserved
        </span>
        </div>
    </div>
  );
}
