import Image from 'next/image';
import React, { useState } from 'react';
import down from './../../public/assets/svg/down.svg'

const Accardion = () => {

    const [btn,setBtn] = useState(false)
    return (
        <div className='w-full mb-2 rounded-xl'>
            <div className='w-full rounded-xl flex h-16 border-2 border-grey justify-between px-2 items-center'>
                <p className='text-blue text-xl'>
                	3d modellash
                </p>
                <button onClick={() =>setBtn(x => !x)}>
                    <Image
                     style={{
                        transform: `rotate(${btn ? 180 : 0}deg)`,
                        transition: 'transform 550ms'
                    }}
                      className='w-7' src={down} alt='icon' />
                </button>
                
            </div>
                 <p 
                 style={{
                    display: btn ? 'block' : 'none',
                    transition: 'transform 550ms'
                }}
                  className='w-full h-24'>
                    Bu to'garakda siz 3D max , AutiCad, compas lar bilan ishlashni o'rganasiz
                </p>
        </div>
    );
}

export default Accardion;
