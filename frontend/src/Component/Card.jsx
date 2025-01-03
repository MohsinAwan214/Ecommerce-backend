import { Link } from "react-router-dom";
import socalIcon from "../assets/images/Frame 575.png";
import ReactStars from "react-stars";
import { useSelector } from "react-redux";

export default function Card(props) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const discountPrice = (
    props.price -
    props.discountPercentage * (props.price / 100)
  ).toFixed(2);
  console.log(discountPrice);

  return (
    <>
      <Link
        to={`/product/${props.id}`}
        className={`card index   h-[350px] max-mm:h-[280px]  max-mm:w-[180px] max-xs:h-[205px] max-xs:w-[140px]   shadow-xl  ${
          darkMode ? "bg-slate-900 border text-white" : ""
        }  w-[270px] group flex-col justify-between  truncate relative`}
      >
        <div className=" rounded h-[250px] max-mm:h-[180px] max-xs:h-[120px] max-xs:w-[140px]  max-mm:w-[180px] w-full  relative flex justify-center items-center  bg-slate-200">
          <img
            className="h-[60px] max-xs:h-[40px] absolute right-2 top-2 "
            src={socalIcon}
            alt=""
          />
          <div
            className={`rounded h-[22px] w-[47px] max-xs:h-[18px] max-mm:w-[40px] bg-primary flex justify-center items-center absolute max-xs:left-2 max-xs:top-2 left-3 top-3 text-white text-[12px] ${props.className}`}
          >
            -{Math.round(props.discountPercentage)}%
          </div>
          <div className={`bg-center  h-[200px] w-[200px]`}>
            <img
              className="group-hover:scale-110 duration-300"
              src={props.image}
              alt=""
            />
          </div>
        </div>
        <div className="h-[84px] w-full max-xs:mt-0  mt-4   flex flex-col  ">
          <h1 className=" font-semibold  leading-6 max-mm:text-[12px] max-xs:text-[10px]">
            {props.Name}
          </h1>
          <div className="pt-1 h-6 w-[85px] flex">
            <span className="price mr-3 font-medium text-sm	max-mm:text-[10px] ">
              ${discountPrice}
            </span>

            <p
              className={` line-through opacity-50 font-medium text-sm max-mm:text-[10px] ${props.className2} `}
            >
              ${props.price}
            </p>
          </div>

          <div className="flex gap-3">
            <div>
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={24}
                edit={false}
                color2={`#fff`}
              />
            </div>
            <div
              className={` opacity-50 font-semibold mt-[10px] max-mm:text-[12px]   text-[15px] ${props.className2} leading-5 `}
            >
              <span>({props.rating})</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
