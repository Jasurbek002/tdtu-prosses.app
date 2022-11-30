import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import strel from './../../../public/assets/images/strel.png'
import univer from './../../../public/assets/images/univer.png'
const Mulk = () => {
    return (
        <div className='w-full flex justify-around items-center flex-wrap'>
            <ul className='w-96 py-10'>
                <Link className='bg-white shadow-lg text-blue  hover:scale-105 w-full p-1 rounded-md m-2 flex items-center justify-between ' href='/'>
                   1. Ixtirolar
                    <Image className='w-8 h-8 rounded-full' src={strel} alt='icon'/>
                </Link>

                <Link className='bg-white shadow-lg text-blue  hover:scale-105 w-full p-1 rounded-md m-2 flex items-center justify-between ' href='/'>
                   2. Foydali modellar
                    <Image className='w-8 h-8 rounded-full' src={strel} alt='icon'/>
                </Link>

                <Link className='bg-white shadow-lg text-blue  hover:scale-105 w-full p-1 rounded-md m-2 flex items-center justify-between ' href='/'>
                   3. Sanoat namunalari
                    <Image className='w-8 h-8 rounded-full' src={strel} alt='icon'/>
                </Link>

                <Link className='bg-white shadow-lg text-blue  hover:scale-105 w-full p-1 rounded-md m-2 flex items-center justify-between ' href='/'>
                   4. EHM uchun dasturlar
                    <Image className='w-8 h-8 rounded-full' src={strel} alt='icon'/>
                </Link>

                <Link className='bg-white shadow-lg text-blue  hover:scale-105 w-full p-1 rounded-md m-2 flex items-center justify-between ' href='/'>
                   5. Ma'lumotlar bazasi
                    <Image className='w-8 h-8 rounded-full' src={strel} alt='icon'/>
                </Link>
            </ul>
            <div 
            style={{width:'600px',height:'280px'}}
            className='flex items-center justify-center'
            >
                <Image className='w-full h-96 my-auto' src={univer} alt='img' />
            </div>
        </div>
    );
}

export default Mulk;
