import Link from 'next/link';
import React from 'react';
import styles from './../../../styles/loyha.module.scss'
import Image from 'next/image';
import fundamental from './../../../public/assets/images/construction.png';
import practical from './../../../public/assets/images/amaily.png';
import inno from './../../../public/assets/images/inno.png';
import xalqaro from './../../../public/assets/images/xalqaro.png';

const Loyha = () => {
    return (
        <div className={styles.Loyha}>
            <h1 className='w-full text-center py-2 my-10 rounded-md'>Bizning Loyixalar</h1>
            <Link className={styles.Loyha__link} href='/tadqiqot/loyha/fundament'>
            <Image src={fundamental} alt='icon' />
                 Fundamental loyixalar
            </Link>
            <Link className={styles.Loyha__link} href='/tadqiqot/loyha/practical'>
            <Image src={practical} alt='icon' />
                 Amaliy loyixalar
            </Link>
            <Link className={styles.Loyha__link} href='/tadqiqot/loyha/inno'>
            <Image src={inno} alt='icon' />
                Innovation loyixalar
            </Link>
            <Link className={styles.Loyha__link} href='/tadqiqot/loyha/inter'>
            <Image src={xalqaro} alt='icon' />
                 Xalqaro loyixalar
            </Link>
        </div>
    );
}

export default Loyha;
