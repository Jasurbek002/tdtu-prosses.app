import Image from 'next/image';
import React from 'react';

import img from '../../public/assets/images/logo.jpg'

const News = () => {
    return (
        <>
          <div className='flex w-full items-center justify-evenly my-20'>
                <span className="w-96 h-1 bg-grey"></span>
                <h1 className='text-blue text-2xl'>So'ngi e'lonlar</h1>
                <span className="w-96 h-1 bg-grey"></span>
            </div>

            <div className='w-full flex items-center justify-evenly p-5 '>
 
 <div className='w-64 flex flex-col items-center shadow-4xl p-5 rounded-md hover:bg-kokroq'>
     <Image className='w-full h-52 ' src={img} alt='card img' />
         <h4 className='text-xl my-2'>songi yangilik</h4>
         <p>bu universitetimizda rektoz bilan uchrashuv bo'lib 
             o'tdi unda universitetimiz talabalari faol qatnshdi
         </p>
 </div>
 <div className='w-64 flex flex-col items-center shadow-4xl p-5 rounded-md hover:bg-kokroq'>
     <Image className='w-full h-52 ' src={img} alt='card img' />
         <h4 className='text-xl my-2'>songi yangilik</h4>
         <p>bu universitetimizda rektoz bilan uchrashuv bo'lib 
             o'tdi unda universitetimiz talabalari faol qatnshdi
         </p>
 </div>
 <div className='w-64 flex flex-col items-center shadow-4xl p-5 rounded-md hover:bg-kokroq'>
     <Image className='w-full h-52 ' src={img} alt='card img' />
         <h4 className='text-xl my-2'>songi yangilik</h4>
         <p>bu universitetimizda rektoz bilan uchrashuv bo'lib 
             o'tdi unda universitetimiz talabalari faol qatnshdi
         </p>
 </div>
 <div className='w-64 flex flex-col items-center shadow-4xl p-5 rounded-md hover:bg-kokroq'>
     <Image className='w-full h-52 ' src={img} alt='card img' />
         <h4 className='text-xl my-2'>songi yangilik</h4>
         <p>bu universitetimizda rektoz bilan uchrashuv bo'lib 
             o'tdi unda universitetimiz talabalari faol qatnshdi
         </p>
 </div>

</div>
        </>
       
    );
}

export default News;
