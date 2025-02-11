
import Radio from "../assets/images/Frame 694.png"


export default function Music() {
  return (
    <div className="bg-[#000000] h-[400px] text-white flex music ">
<div className="ml-12 music-1 h-full  max-w-96   flex flex-col  justify-around ">
  <div className="text-[#00FF66] leading-5 musicText">Categories</div>
  <div className=" text-5xl w-96 musicText-1 ">Enhance Your Music Experience</div>
  <div className='flex text-black gap-5  music-2'>

   <ul className="bg-white h-12 w-12 rounded-full z-10 px-2 text-center  flex-col days">
      <li className='text-sm font-bold text'>23</li>
      <li className='text-[8px] text-center text-1'>Days</li>
   </ul>
   
   <ul className="bg-white h-12 w-12 rounded-full z-10 px-2 text-center   hours">
      <li className='text-sm font-bold text'>05</li>
      <li className='text-[8px]  text-center text-1'>Hours</li>
   </ul>
   
   <ul className="bg-white h-12 w-12  rounded-full z-10  text-center   minutes">
      <li className='text-sm font-bold text'>59</li>
      <li className='text-[8px]  text-center text-1'>Minutes</li>
   </ul> 
   
   <ul className="bg-white h-12 w-12 rounded-full z-10  text-center  seconds">
      <li className='text-sm text-center font-bold text'>35</li>
      <li className='text-[8px] text-center text-1'>Seconds</li>
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
