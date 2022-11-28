import React from 'react';
import Link from 'next/link';
import { items2 } from '../../components/data/items';
const Tadqiqot = () => {
    return (
        <div className='flex flex-col w-full my-20'>
            <h2 className='text-3xl  ml-10'>{items2[0]}</h2>
           {
            items2?.map((el,index) =>{
              return <Link key={index} className='w-96 ml-10 my-1 hover:text-grey hover:decoration-blue' href={`${el.path}`} >{el.name}</Link>
            })
           } 
        </div>
    );
}

export default Tadqiqot;
