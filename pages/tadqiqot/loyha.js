import Link from 'next/link';
import React from 'react';
import styles from './../../styles/loyha.module.scss'
const Loyha = () => {
    return (
        <div className={styles.Loyha}>
            <h1 className='w-full text-center py-2 my-10 rounded-md'>Bizning Loyixalar</h1>
            <Link className={styles.Loyha__link} href='/'>
                 Fundamental loyixalar
            </Link>
            <Link className={styles.Loyha__link} href='/'>
                 Amaliy loyixalar
            </Link>
            <Link className={styles.Loyha__link} href='/'>
                Innovation loyixalar
            </Link>
            <Link className={styles.Loyha__link} href='/'>
                 Xalqaro loyixalar
            </Link>
        </div>
    );
}

export default Loyha;
