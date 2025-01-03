// import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from './Card';

import  useProduct from '../hooks/useProduct';

// function Swip({index}) {
//   return <div className='bdr h-96 w-60'>{index}</div>
// }


export default function Slider() {
const {products} = useProduct('limit=10&skip=30')

  return (


    <div className=' mt-10 '>

<Swiper

      spaceBetween={50}
      modules={[Navigation,Pagination,Autoplay]}
      autoplay={{delay:1500, pauseOnMouseEnter:true}}
      pagination={{clickable:true}}
      navigation
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
        {products?.map((item)=>(
      <SwiperSlide className='border shadow-xl '>
            <Card

            key={item.id}
            id={item.id}
            Name={item.title} 
            image={item.thumbnail}  
            discountPercentage={item.discountPercentage}
            price={item.price} 
            rating={item.rating}
            
            />
          </SwiperSlide>
          ))}
     
    
    </Swiper>

    </div>
  )
}
