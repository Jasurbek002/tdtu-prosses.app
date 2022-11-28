import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';


import img from '../../public/assets/images/logo.jpg'

const News = () => {
    return (
        <>
          <div className='flex w-full items-center justify-evenly mb-8 mt-20'>
                <span className="w-96 h-1 bg-grey"></span>
                <h1 className='text-blue text-2xl'>So'ngi e'lonlar</h1>
                <span className="w-96 h-1 bg-grey"></span>
            </div>

            <div className='w-full flex items-center justify-evenly p-5 '>
 
 <div style={{backgroundColor:'lightskyblue'}} className=' w-72 flex flex-col items-center shadow-4xl  rounded-md'>
     <Image className='w-full h-56 rounded-md' src={img} alt='card img' />
         <h4 className='text-xl my-2 mx-2'>songi yangilik</h4>
         <p className=' mx-2'>bu universitetimizda rektoz bilan uchrashuv bo'lib 
             o'tdi unda universitetimiz talabalari faol qatnshdi
         </p>
         <Button variant="outlined" className='bg-white ml-auto' >more</Button>
 </div>
 <div style={{backgroundColor:'lightskyblue'}} className=' w-72 flex flex-col items-center shadow-4xl  rounded-md'>
     <Image className='w-full h-56 rounded-md' src={img} alt='card img' />
         <h4 className='text-xl my-2 mx-2'>songi yangilik</h4>
         <p className=' mx-2'>bu universitetimizda rektoz bilan uchrashuv bo'lib 
             o'tdi unda universitetimiz talabalari faol qatnshdi
         </p>
         <Button variant="outlined" className='bg-white ml-auto ' >more</Button>
 </div>
 <div style={{backgroundColor:'lightskyblue'}} className=' w-72 flex flex-col items-center shadow-4xl  rounded-md'>
     <Image className='w-full h-56 rounded-md' src={img} alt='card img' />
         <h4 className='text-xl my-2 mx-2'>songi yangilik</h4>
         <p className=' mx-2'>bu universitetimizda rektoz bilan uchrashuv bo'lib 
             o'tdi unda universitetimiz talabalari faol qatnshdi
         </p>
         <Button variant="outlined" className='bg-white ml-auto ' >more</Button>
 </div>
 <div style={{backgroundColor:'lightskyblue'}} className=' w-72 flex flex-col items-center shadow-4xl  rounded-md'>
     <Image className='w-full h-56 rounded-md' src={img} alt='card img' />
         <h4 className='text-xl my-2 mx-2'>songi yangilik</h4>
         <p className=' mx-2'>bu universitetimizda rektoz bilan uchrashuv bo'lib 
             o'tdi unda universitetimiz talabalari faol qatnshdi
         </p>
         <Button variant="outlined" className='bg-white ml-auto ' >more</Button>
 </div>

</div>
        </>
       
    );
}

export default News;
