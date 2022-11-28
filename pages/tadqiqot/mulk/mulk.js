import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Mulk = () => {
    return (
        <div className='w-full flex justify-around'>
            <ul className='w-96'>
                <Link href=''>
                    Ixtirolar
                    {/* <Image src={} alt='icon'/> */}
                </Link>
            </ul>
        </div>
    );
}

export default Mulk;
