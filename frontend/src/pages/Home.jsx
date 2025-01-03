import Vouchor from "../Component/Vouchor";
import Title from "../Component/Title";
import Hero from "../Component/Hero";
import Card from "../Component/Card";
import Button from "../Component/Button";
import Arrow from "../Component/Arrow";
import Categories from "../Component/Categories";
import NewArrival from "../Component/NewArrival";


import "../index.css";
import Music from "../Component/Music";
import Delivery from "../Component/Delivery";
import { FaArrowUp } from "react-icons/fa6";
import Slider from "../Component/Slider";
import useProduct from "../hooks/useProduct";
import { useSelector } from "react-redux";

export default function Home() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const {products} = useProduct("limit=30&skip=80")
 
  return (
    <>
    <div className={` transition-color duration-300 ${darkMode ? "bg-slate-900" : "" } `} >

      <div className="overflow-hidden margin ">
        <div id="top">
          <Vouchor darkMode={darkMode}/>
        </div>

        <div className="mt-20">
          <Title text="Today’s" className="mb-1" />
          <div className="flex justify-between">
            <Hero darkMode={darkMode}/>
            <Arrow />
          </div>

         
          <Slider />
           
        </div>

        <div className="border-b-[2px]  flex justify-center  pb-14">
          <Button
            text="View All Products"
            className=" h-14 w-52 text-sm font-medium bg-center mt-7 "
            />
        </div>

        <div className="mt-20 border-b-[2px] pb-14 ">
          <Title text="Categories" className="mb-1 max-xs:text-[14px]" />
          <div className="flex justify-between">
            <h1 className={`${darkMode ? "text-white" : ""} max-xs:text-[20px] font-semibold  pt-2 text-3xl  tracking-wide`}>
              Browse By Category
            </h1>
            <Arrow />
          </div>
          <div className="mt-10">
            <Categories darkMode={darkMode}/>
          </div>
        </div>

        <div className="mt-20">
          <Title text="This Month" className="mb-1 max-xs:text-[14px]" />
          <div className="flex justify-between ">
            <h1 className={`${darkMode ? "text-white" : ""} max-xs:text-[20px] font-semibold  pt-2 text-3xl  tracking-wide`}>
              Best Selling Products
            </h1>
            <Button
              text="View All"
              className="h-11 max-xs:h-7 max-xs:w-20 w-28 text-sm font-medium bg-center"
              />
          </div>

          <div className="flex max-mm:gap-2 max-xs:gap-2  gap-10 mt-10 var">
          {products?.slice(0,4).map((item)=>(
            
            <Card
            id={item.id}
            key={item.id}
            Name={item.title} 
            image={item.thumbnail} 
            className1="hidden" 
            discountPercentage={item.discountPercentage}
            price={item.price} 
            rating={item.rating}
            
            />
          ))}
          </div>
        </div>

        <div className="mt-28">
          <Music />
        </div>

        <div className="mt-16">
          <Title text="Our Products" className="mb-1 max-xs:text-[14px] " />
          <div className="flex justify-between">
            <h1 className={`${darkMode ? "text-white" : ""} max-xs:text-[20px]  font-semibold  pt-2 text-3xl  tracking-wide`}>
              Explore Our Products
            </h1>
            <Arrow />
          </div>
          <div className="flex max-mm:gap-2 gap-10 mt-10 var">
          {products?.slice(4,8).map((item)=>(
            
            <Card
            key={item.id}
            id={item.id}
            Name={item.title} 
            image={item.thumbnail} 
            className1="hidden" 
            discountPercentage={item.discountPercentage}
            price={item.price} 
            rating={item.rating}
            
            />
          ))}
          </div>
          <div className="flex gap-10 max-mm:gap-2 mt-10 var ">
          {products?.slice(8,12).map((item)=>(
 
            <Card
            key={item.id}
            id={item.id}
            Name={item.title} 
            image={item.thumbnail} 
            className2={"text-white"} 
            discountPercentage={item.discountPercentage}
            price={item.price} 
            rating={item.rating}
            
            />
          ))}
          </div>
          <div className="mt-10">
            <Button
              text="View All Products"
              className="mx-auto h-14 w-52 text-sm font-medium bg-center mt-7"
              />
          </div>
        </div>

        <div className="mt-24 ">
          <div>
            <Title text="Featured" className="mb-1 max-xs:text-[14px]" />
            <h1 className={`${darkMode ? "text-white" : ""} max-xs:text-[20px] font-semibold  pt-2 text-3xl  tracking-wide`}>
              New Arrival
            </h1>
          </div>

          <div>
            <NewArrival />
          </div>
        </div>

        <div className="mt-36 flex justify-center">
          <Delivery darkMode={darkMode}/>
        </div>
        <div className="mb-10 bg-[#F5F5F5] flex float-end h-10 w-10 rounded-full bg-center text-2xl">
          <a id="top" href=""><FaArrowUp/></a>
        </div>

        
      </div>
              </div>
    </>
  );
}
