import Image from "next/image";
import Button from '@mui/material/Button';

import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import oliy from './../../public/assets/images/oliy.jpg'
import ziyo from './../../public/assets/images/ziyo.jpg'
import govuz from './../../public/assets/images/govuz.png'
import gerb from './../../public/assets/images/gerb.png'






const Partner = () => {
    return (
        <div className='w-full flex flex-wrap items-center justify-evenly py-30 my-10 '>
             <div className='flex w-full items-center justify-evenly my-20 '>
                <span className="w-96 h-1 bg-grey"></span>
                <h1 className='text-blue text-2xl'>Hamkorlar</h1>
                <span className="w-96 h-1 bg-grey"></span>
                </div>
            <Swiper
               slidesPerView={4}
               modules={[Navigation,Thumbs]}
               navigation={true}
               grabCursor={true}
               loop = {true}
               className={' w-11/12'}
               >
                <SwiperSlide>
                <div className='w-64 h-64 py-5 bg-white flex flex-col items-center shadow shadow-blue rounded-xl mt-6 hover:scale-105 hover:animate-pulse'>
                <Image className='w-36 h-36' src={oliy}  alt='icon'/>
                <Button className='top-9' href="https://www.edu.uz/uz">Link</Button>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-64 h-64 py-5 bg-white flex flex-col items-center shadow shadow-blue rounded-xl mt-6'>
                <Image className='w-36 h-36' src={govuz}  alt='icon'/>
                <Button className='top-9' href="https://www.edu.uz/uz">Link</Button>
                 </div> 
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-64 h-64 py-5 bg-white flex flex-col items-center shadow shadow-blue rounded-xl mt-6'>
                <Image className='w-36 h-36' src={ziyo}  alt='icon'/>
                <Button className='top-9' href="#">Link</Button>
                 </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-64 h-64 py-5 bg-white flex flex-col items-center shadow shadow-blue rounded-xl mt-6'>
                <Image className='w-36 h-36' src={gerb}  alt='icon'/>
                <Button className='top-9' href="https://www.edu.uz/uz">Link</Button>
            </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Partner;
