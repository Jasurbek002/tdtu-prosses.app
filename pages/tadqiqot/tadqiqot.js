import React from 'react';
import Link from 'next/link';
const Tadqiqot = () => {
    return (
        <div className='w-full'>
           <ul className='w-96 flex flex-col items-start mx-10 my-20'>
           <Link  className='w-full hover:text-blue p-1 ' href='/tadqiqot/texnik/texnik'>ilmiy-texnik kengash</Link>
            <Link className='w-full hover:text-blue p-1 ' href='/tadqiqot/loyha/loyha'>ilmiy loyhalar</Link>
            <Link className='w-full hover:text-blue p-1 ' href='/tadqiqot/labaratoria/labaratorya'>ilmiy labaratorya</Link>
            <Link className='w-full hover:text-blue p-1 ' href='/tadqiqot/mulk/mulk'>intelektual mulk obektlari</Link>
           </ul>

        </div>
    );
}

export default Tadqiqot;
