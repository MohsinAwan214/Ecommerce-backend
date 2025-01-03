import { RiArrowDropRightLine } from "react-icons/ri";
import MobileImg from "../assets/images/hero.png";
import { RiAppleFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

export default function vouchor({ darkMode }) {
  return (
    <>
      <div className={`flex  w-full min-h-96 gap-[53px]  voucher1  ${ darkMode ? "text-white" : ""} `}>
        <div className="border-r-[1px]  h-[385px] w-60 voucher3">
          <ul
            className=" font-normal h-62    mt-10 flex flex-col gap-2
             
            "
          >
            <li className="py-3 h-[30px] w-32  flex items-center  group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline  relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Woman’s Fashion{" "}
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center  group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Men’s Fashion{" "}
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Electronics
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Home & Lifestyle
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Medicine
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Sports & Outdoor
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Baby’s & Toys
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Groceries & Pets
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center  group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Health & Beauty
              </div>
            </li>
          </ul>
        </div>

        <div className="h-[344px] flex  gap-10 max-ml:gap-[10px] max-xs:h-44  max-mm:h-[180px]  w-[900px] max-ml:h-[200px] max-md:h-[290px]  mt-10  bg-[#000000] overflow-hidden text-[#FAFAFA]">
          <div className=" flex flex-col h-full  gap-2 w-72 ml-14  max-ml:ml-7 max-ml:w-52 max-md:h-64 max-md:w-60  ">
            <div className=" flex items-center  gap-4 mt-14 max-ml:mt-7 max-md:mt-9 max-xs:gap-[3px]">
              <RiAppleFill className="w-12 apple h-12 max-xs:w-6 max-xs:h-6" />
              <span className="text-[10px] iphone Poppins max-xs:text-[4px] ">
                iPhone 14 Series
              </span>
            </div>
            <div className="font-semibold inter heading-2 text-[48px] max-xs:text-[15px] max-mm:text-[18px]  leading  w-full max-ml:text-[20px] max-md:text-[40px]">
              Up to 10% off Voucher
            </div>
            <div className="flex items-center mt-4 gap-2 underline Poppins max-xs:text-[7px]  text-[10px]">
              <a href="#">Shop Now</a>
              <FaArrowRight />
            </div>
          </div>
          <div className=" flex items-center justify-end h-[344px] w-[496px] max-xs:h-[200px]  max-ml:h-[200px] max-md:h-[300px]">
            <img src={MobileImg}  className="h-full w-full max-ml:w-[260px] max-ml:h-[180px] " alt="" />
          </div>
        </div>
      </div>
    </>
  );
}