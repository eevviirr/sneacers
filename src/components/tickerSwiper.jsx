import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css';

import trendSetting1 from '../assets/trendSetting__photo__1.png';
import trendSetting2 from '../assets/trendSetting__photo__2.gif';
import trendSetting3 from '../assets/trendSetting__photo__3.png';
import trendSetting4 from '../assets/trendSetting__photo__4.png';

function TickerSwiper() {
	return (
		<Swiper className='h-96 mt-10' spaceBetween={50} slidesPerView={2.2}>
			<SwiperSlide className='rounded-2xl'>
				<div className='w-full h-full bg-black rounded-2xl overflow-hidden'>
					<img src={trendSetting1} alt='' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='rounded-2xl'>
				<div className='w-full h-full bg-black rounded-2xl overflow-hidden'>
					<img src={trendSetting2} alt='' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='rounded-2xl'>
				<div className='w-full h-full bg-black rounded-2xl overflow-hidden'>
					<img src={trendSetting3} alt='' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='rounded-2xl'>
				<div className='w-full h-full bg-black rounded-2xl overflow-hidden'>
					<img src={trendSetting4} alt='' />
				</div>
			</SwiperSlide>
		</Swiper>
	);
}

export default TickerSwiper;
