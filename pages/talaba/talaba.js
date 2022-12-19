import React from 'react';
import Link from 'next/link';
import { items4 } from '../../components/data/items';
import Boss from '../../components/boss/boss';
import Image from 'next/image';
import strel from './../../public/assets/images/strel.png'
import qobul from './../../public/assets/images/qobul.jpg'
const Talaba = () => {
    return (
      <div className='flex flex-wrap w-full my-20 justify-around'>
      <h2 className='text-3xl w-full text-center  ml-10 my-5'>{items4[0]}</h2>
    <div className='w-96'>
    {
      items4?.map((el,index) =>{
      if(typeof el ==='object'){
          return <Link key={index} className='bg-white shadow-lg text-blue  hover:scale-105 w-full p-1 rounded-md m-2 flex items-center justify-between ' href='/'>
          {el.id}. {el.name}
           <Image className='w-8 h-8 rounded-full' src={strel} alt='icon'/>
       </Link>
      }
      })
     } 
    </div>
    <Boss
     image={qobul}
      text={"Muxiddinov Qobiljon Akmal o'g'li Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish boʼlimi boshlig'i"}
       />
  </div>
    );
}

export default Talaba;
