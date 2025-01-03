
import Radio from "../assets/images/Frame 694.png"


export default function Music() {
  return (
    <div className="bg-[#000000] h-[400px] text-white flex  ">
<div className="ml-12  h-full  max-w-96  flex flex-col border justify-between py-10 ">
  <div className="text-[#00FF66] leading-5 ">Categories</div>
  <div className=" text-5xl w-96  border">Enhance Your Music Experience</div>
  <div className='flex text-black gap-5 border '>

   <ul className="bg-white h-12 w-12 rounded-full z-10 px-2 text-center  flex-col ">
      <li className='text-sm font-bold '>23</li>
      <li className='text-[8px] text-center '>Days</li>
   </ul>
   
   <ul className="bg-white h-12 w-12 rounded-full z-10 px-2 text-center   ">
      <li className='text-sm font-bold '>05</li>
      <li className='text-[8px]  text-center '>Hours</li>
   </ul>
   
   <ul className="bg-white h-12 w-12  rounded-full z-10 flex-col  bg-center   ">
      <li className='text-sm font-bold '>59</li>
      <li className='text-[8px]  text-center '>Minutes</li>
   </ul> 
   
   <ul className="bg-white h-12 w-12 rounded-full z-10  text-center  ">
      <li className='text-sm text-center font-bold text'>35</li>
      <li className='text-[8px] text-center '>Seconds</li>
   </ul>
   </div>
 <div className="bg-[#00FF66] h-14 w-[171px] BayNow-btn
  text-white bg-center rounded border ">
<button className="font-semibold">Bay Now!</button>
 </div>
  
</div>
<div className="text-white h-full  w-full bg-center ">
  <img src={Radio} alt="" />
</div>
    </div>
  )
}
