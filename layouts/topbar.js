import Image from 'next/image'
import Link from 'next/link';
import styles from './../styles/topbar.module.scss'

import logo from '../public/assets/images/LOGO.png'
import searchicon from '../public/assets/svg/search.svg'
import { useState } from 'react';
const Topbar = () => {
    const [search , setSearch] = useState(false)
    return (
 
            <div className={styles.Topbar}>
                <Link className={styles.Topbar__logo} href='/'>
                    <Image className={styles.Topbar__logo__img} src={logo} alt='logotip image' />
                </Link>
                <h2 className={styles.Topbar__title}>
                    Islom Karimov nomidagi toshkent davlat texnika universitetining
                    Ilmiy bo'limi
                </h2>
                <buttom className='w-35 h-35'>
                    <Image
                     style={{width:'35px',cursor:'pointer'}}
                      src={searchicon}
                       alt='search icon'/>
                </buttom>
                <select defaultValue='uz' name='lang' className={styles.Topbar__lang}>
                    <option value='en'>en</option>
                    <option value='ru'>ru</option>
                    <option value='uz'>uz</option>
                </select>
               
            </div>

    );
}

export default Topbar;
