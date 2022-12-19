import React from 'react';
import Accardion from '../../../components/accardion/accardion';

const Circles = () => {
    return (
        <div className='w-full flex flex-col items-start p-5'>
            <h1 className='text-2xl text-center w-full my-5 text-blue'>To'garaklar</h1>
            <Accardion />
            <Accardion />
            <Accardion />
            <Accardion />
            <Accardion />
            <Accardion />
        </div>
    );
}

export default Circles;
