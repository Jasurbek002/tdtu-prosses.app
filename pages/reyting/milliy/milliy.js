import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import milliyimg from './../../../public/assets/images/milliy.jpg'
import milliyimg2 from './../../../public/assets/images/milliy2.jpg'
import milliyimg3 from './../../../public/assets/images/milliy3.jpg'


const Milliy = () => {
    return (
        <div className='w-full flex flex-col items-center my-10'>
            <p className='w-11/12 text-xl text-grenn my-10'>
            Тошкент давлат техника университети 2021 йил Миллий рейтингида 6-ўринни эгаллади

Олий ва ўрта махсус таълим вазирлигида олий таълим муассасалари ва академик лицейлар рейтингини эълон қилинди. Миллий рейтинг доирасида битирувчилари мавжуд 92 та (шу жумладан, 69 та ОТМ, 23 та филиал) олий таълим муассасаларининг фаолияти самарадорлигига қуйидаги 4 та йўналишдаги 20 та индикатор асосида баҳо берилди.

👉 илмий тадқиқот фаолияти ва таълим-фан-ишлаб чиқариш интеграцияси;
👉 ўқув-методик ишлар фаолияти ва ўқитиш сифати;
👉 талабалар билими ва битирувчилар сифати;
👉 спортни ривожлантириш. 

Тошкент давлат техника университети Миллий ОТМлар рейтингида қуйидаги ўринларни эгаллади
            </p>
            <div style={{maxWidth:'1500px',height:"500px"}}>
                <Image className='w-full h-full' src={milliyimg} alt='img' />
            </div>

            <p className='w-11/12 text-xl text-grenn my-10'>
            Энг кўп маблағ ишлаб топган ОТМлар бўйича
             Тошкент давлат техника университети 1-ўрин.
            </p>
            <div style={{maxWidth:'1500px',height:"500px"}}>
                <Image className='w-full h-full' src={milliyimg2} alt='img' />
            </div>
            <p className='w-11/12 text-xl text-grenn my-10'>
            Техника ва қишлоқ хўжалиги соҳаси бўйича ОТМлар рейтингида
             Тошкент давлат техника университети 3-ўрин.
            </p>
            <div style={{maxWidth:'1500px',height:"500px"}}>
                <Image className='w-full h-full' src={milliyimg3} alt='img' />
            </div>
        </div>
    );
}

export default Milliy;
