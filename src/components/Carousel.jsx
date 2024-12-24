// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'


import bgimg1 from '../assets/bannerImg/restourent-Photoroom.jpg'
import bgimg2 from '../assets/bannerImg/event-planning-Photoroom.jpg'
import bgimg3 from '../assets/bannerImg/health-&-wellness-Photoroom.jpg'
import bgimg4 from '../assets/bannerImg/Business-services-Photoroom.jpg'

const Carousel = () => {
    return (
        <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='Find Your Best Food & Place'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Best Event Planning In Winter'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Be Healthy Be Happy Forever'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg4}
            text='Your Best Business Plan'
          />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Carousel;