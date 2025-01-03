import ps5 from "../assets/images/ps5.png"
import amazon from "../assets/images/amazon.png"
import baji from "../assets/images/baji.png"
import Gucci from "../assets/images/Gucci.png"



export default function NewArrival() {
  return (
  <div className="main grid grid-cols-4 gap-7 grid-rows-2 mt-10 newarival">

<div className="bg-[#0D0D0D] rounded col-span-2 row-span-2 relative bg-center group overflow-hidden ">
  <img src={ps5} alt="" className="w-full group-hover:scale-110 duration-300" />
  <div className="absolute w-56 gap-3 bottom-5 left-5 flex-col flex">
    <h1 className="S_Underline relative inline-block after:bg-white group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] font-semibold text-[#FAFAFA] text-2xl ">PlayStation 5</h1>
    <p className="text-[#FAFAFA] text-[14px] font-normal">Black and White version of the PS5 coming out on sale.</p>
    <a className="font-medium text-[#FFFFFF] underline" href="">Shop Now</a>
  </div>
  </div>

  
<div className="bg-[#0D0D0D] rounded col-span-2  bg-center relative group overflow-hidden">
  <img src={baji} alt="" className="h-full right-0 absolute group-hover:scale-110 duration-300"/>
  <div className="absolute gap-3 bottom-5 left-5 flex-col flex">
    <h1 className="S_Underline relative inline-block after:bg-white group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] font-semibold text-[#FAFAFA] text-2xl">Women’s Collections</h1>
    <p className="text-[#FAFAFA] text-[14px] font-normal w-56">Featured woman collections that give you another vibe.</p>
    <a className="font-medium text-[#FFFFFF] underline" href="">Shop Now</a>
  </div>
  </div>
  <div className="bg-black">
<div

style={{
  backdropFilter:"blur(300px)",
  background:"rgba(217 , 217 , 217 , 0.09)",
  
}}
className="bg-[#0D0D0D] rounded col-end-4  bg-center relative h-full p-5 group">
  
  <img src={amazon} alt="" className="group-hover:scale-110 duration-300" />
  <div className="absolute w-56 gap-1 bottom-5 left-5 flex-col flex">
    <h1 className="S_Underline relative inline-block after:bg-white group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] font-semibold text-[#FAFAFA] text-2xl ">Speakers</h1>
    <p className="text-[#FAFAFA] text-[14px] font-normal">Amazon wireless speakers</p>
    <a className="font-medium text-[#FFFFFF] underline" href="">Shop Now</a>
  </div>
  </div>
  </div>

  <div className="bg-black group">

<div
style={{
  backdropFilter:"blur(300px)",
  background:"rgba(217 , 217 , 217 , 0.2)",
  
}}

className="bg-[#0D0D0D] rounded bg-center relative p-5 h-full ">
  <img src={Gucci} alt="" className="group-hover:scale-110 duration-300"/>

  <div className="absolute w-56 gap-3 bottom-5 left-5 flex-col flex">
    <h1 className="S_Underline relative inline-block after:bg-white group:hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] font-semibold text-[#FAFAFA] text-2xl">Perfume</h1>
    <p className="text-[#FAFAFA] text-[14px] font-normal">GUCCI INTENSE OUD EDP</p>
    <a className="font-medium text-[#FFFFFF] underline" href="">Shop Now</a>
  </div>
  </div>

  </div>

  </div>
  )}
