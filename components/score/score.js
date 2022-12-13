import Image from "next/image";
import stdent from '../../public/assets/images/student.svg';
import stdents from '../../public/assets/images/students.svg';
import teacher from '../../public/assets/images/teachers.svg';
import partner from '../../public/assets/images/partner.svg';

import Aos from "aos";
import { useEffect } from "react";



const Score = ({fakul,students,teachers,forwork}) => {
    useEffect(() =>{
        Aos.init()
    })
    return (
        <div
        data-aos="flip-down"
        className={'flex w-full h-96 mt-12 items-center justify-evenly flex-wrap relative z-0 box'}>
                     <h2 className='absolute top-10 text-xl text-grey w-full text-center bg-kokroq'>Ko'rsatgichlar</h2>
            <div 
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="flex flex-col items-center  bg-white rounded-md  relative spin">
                <Image className="w-10 h-10 mb-5" src={stdents} alt='icon' />
                 <h1 className='text-blue'>{students} +</h1>
                 <p className='info'>Bakalavrlar</p>
            </div>

            <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="flex flex-col bg-white rounded-md items-center   relative spin">
                <Image className="w-10 h-10 mb-5" src={stdent} alt='icon' />
                 <h1 className='text-blue'>{fakul} +</h1>
                 <p className='info'>Magistrlar</p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="flex flex-col items-center  bg-white rounded-md  relative spin">
                <Image className="w-10 h-10 mb-5" src={teacher} alt='icon' />
                 <h1 className='text-blue'>{teachers} +</h1>
                 <p className='info'>Professorlar</p>
            </div>
            <div 
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="flex flex-col items-center  bg-white rounded-md  relative spin">
                <Image className="w-10 h-10 mb-5" src={partner} alt='icon' />
                 <h1 className='text-blue'>{forwork} +</h1>
                 <p className='info'>Hamkorlar</p>
            </div>
            
        </div>
    );
}

export default Score;
