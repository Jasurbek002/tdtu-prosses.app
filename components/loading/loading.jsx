import Image from 'next/image';
import React from 'react';
import loader from '../../public/assets/gif/loader.svg'
const Loading = () => {
    return (
        <div className='w-full flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 bg-white ease-in duration-300'>
            <Image src={loader} alt='loading...' />
        </div>
    );
}

export default Loading;
