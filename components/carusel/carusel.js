
import styles from '../../styles/carusel.module.scss'
import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/thumbs'


import image from '../../public/assets/images/fon.jpg'
import Image from 'next/image';





function Carusel() {


    return(
        <div className={styles.Carusel}>

        
 <Swiper
     
      spaceBetween={1}
      // allowSlideNext={50}
      // slidesPerView={1}
      modules={[Navigation,Thumbs]}
      navigation={true}
      grabCursor={true}
      loop = {true}

      // onSlideChange={(e) => console.log(e)}
      // onSwiper={(swiper) => swiper.animating}

    >
      <SwiperSlide><Image className={styles.Carusel__img} src={image} alt="img" /></SwiperSlide>
      <SwiperSlide><img className={styles.Carusel__img} src="https://picsum.photos/200/300" alt="" /></SwiperSlide>
      <SwiperSlide><img className={styles.Carusel__img} src="https://picsum.photos/200/300" alt="" /></SwiperSlide>
      <SwiperSlide><img className={styles.Carusel__img} src="https://picsum.photos/200/300" alt="" /></SwiperSlide>
      <SwiperSlide><img className={styles.Carusel__img} src="https://picsum.photos/200/300" alt="" /></SwiperSlide>
      
    </Swiper>
    {/* <div className={styles.Carusel__blur}>
      <h1 data-text={`Universitetimizda bugun`} >Universitetimizda bugun</h1>
      <p className='text-white mx-16 mt-10'>Innovatsion loyhalar taqdimoti bo'lib o'tdi. Unda Ko'plab ilg'or texnologiyalar
      taqdim etildi
      </p>
    </div> */}
        </div>
    )
}

export default Carusel
