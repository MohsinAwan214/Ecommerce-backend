import "../index.css";

export default function Hero() {
  return (
    <>
      <div
        className={`transition-color duration-300 flex 
          
          justify-between`}
      >
        <div className="flex gap-11  max-xs:gap-[30px] items-center ">
          <div className="">
            <span className="font-semibold bg-center pt-2 text-3xl max-ml:text-2xl  max-xs:text-[20px]  max-xs:w-28 fontInter tracking-wide ">
              Flash Sales
            </span>
          </div>

          <div className="flex">
            <ul>
              <li className="text-[10px] max:ml-text-[8px] max-xs:text-[8px]  font-medium text-center">
                Days
              </li>
              <li className="text-3xl max-ml:text-2xl font-bold px-2 max-xs:text-[20px]">
                03
              </li>
            </ul>
            <span className=" flex text-2xl mt-4 max-xs:mt-3 max-xs:text-[22px]">
              :
            </span>
            <ul>
              <li className="text-[10px] max:ml-text-[8px] max-xs:text-[8px] font-medium text-center">
                Hours
              </li>
              <li className="text-3xl max-ml:text-2xl font-bold px-2 max-xs:text-[20px]">
                23
              </li>
            </ul>
            <span className=" flex text-2xl mt-4 max-xs:mt-3 max-xs:text-[22px]">
              :
            </span>
            <ul>
              <li className="text-[10px] max:ml-text-[8px] max-xs:text-[8px] font-medium text-center">
                Minutes
              </li>
              <li className="text-3xl max-ml:text-2xl font-bold px-2 max-xs:text-[20px]">
                16
              </li>
            </ul>
            <span className=" flex text-2xl mt-4 max-xs:mt-3 max-xs:text-[22px]">
              :
            </span>
            <ul>
              <li className="text-[10px] max:ml-text-[8px] max-xs:text-[8px] font-medium text-center">
                Months
              </li>
              <li className="text-3xl max-ml:text-2xl font-bold px-2 max-xs:text-[20px]">
                56
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
