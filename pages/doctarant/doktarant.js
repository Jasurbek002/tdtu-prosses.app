import Link from 'next/link';
import React from 'react';
import {items1 } from '../../components/data/items.js'
const Doktarant = () => {
    return (
        <div className='flex flex-col w-full my-5'>
            <h2 className='text-3xl  ml-10'>{items1[0]}</h2>
           {
            items1?.map((el,index) =>{
              return <Link key={index} className='w-96 ml-10 my-1 hover:text-grey hover:decoration-blue' href={`${el.path}`} >{el.name}</Link>
            })
           } 
        </div>
    );
}

export default Doktarant;
