import { useRef } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../App.css'



export const Carrosel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return( 
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      pagination={{ el:'custom-pagination',clickable: true}}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='h-150'
      
    >
      
      <SwiperSlide className='h-150'>
        <div className='flex justify-center container-center my-2 h-150'>
          <img src="/slider/ropa1.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center container-center my-2 h-150'>
          <img src="/slider/ropa2.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center container-center my-2 h-150'>
          <img src="/slider/ropa3.jpg" alt="" />
        </div>
      </SwiperSlide>

      <div ref={prevRef} className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-500 bg-opacity-70 flex items-center justify-center text-white cursor-pointer hover:bg-opacity-90">
        <img src="./next.svg" alt="" className='w-3/4 rotate-180'/>
      </div>

      <div ref={nextRef} className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-500 bg-opacity-70 flex items-center justify-center text-white cursor-pointer hover:bg-opacity-90">
        <img src="./next.svg" alt="" className='w-3/4'/>
      </div>
    </Swiper>
  );
};

