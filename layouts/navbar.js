import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/navbar.module.scss'

import {items1,items2,items3,items4,items5} from '../components/data/items'

const Navbar = () => {

    const [modal,setModal] = useState(false)

    const hendler = (e,v) =>{
        // console.log(v.target.value)
        // if(e){
        //     setModal(v.target.value)
        // }else{
        //     setModal(false)
        // }
    }

    return (
        <div className={styles.Navbar}>
              <ul className={styles.Navbar__nav}>
                <li  className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/' >Home</Link>
    
                </li>
                <li value={1} onMouseEnter={(e) => hendler(e.isTrusted,e)} className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/daktarantura' >Doktarantura</Link>
                    <div className={styles.Navbar__nav__item__menu}>
                     <p>{items1[0]}</p>
                    {
                        items1?.map((el)=>{
                            return <Link className={styles.Navbar__nav__item__menu__links}  key={el.id} href={`${el.path}`} >{el.name}</Link>
                        })
                    }
                    </div>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/ilmiyt' >Ilmiy-tadqiqot</Link>
                    <div className={styles.Navbar__nav__item__menu}>
                     <p>{items2[0]}</p>
                    {
                        items2?.map((el)=>{
                            return <Link className={styles.Navbar__nav__item__menu__links}  key={el.id} href={`${el.path}`} >{el.name}</Link>
                        })
                    }
                    </div>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/grand' > Reyting </Link>
                    <div className={styles.Navbar__nav__item__menu}>
                     <p>{items3[0]}</p>
                    {
                        items3?.map((el)=>{
                            return <Link className={styles.Navbar__nav__item__menu__links}  key={el.id} href={`${el.path}`} >{el.name}</Link>
                        })
                    }
                    </div>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/ilmiy' >Iqtidorli-talabalar</Link>
                    <div className={styles.Navbar__nav__item__menu}>
                     <p>{items4[0]}</p>
                    {
                        items4?.map((el)=>{
                            return <Link className={styles.Navbar__nav__item__menu__links}  key={el.id} href={`${el.path}`} >{el.name}</Link>
                        })
                    }
                    </div>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/ilmiy' >Tijoratlashtirish</Link>
                    <div className={styles.Navbar__nav__item__menu}>
                     <p>{items5[0]}</p>
                    {
                        items5?.map((el)=>{
                            return <Link className={styles.Navbar__nav__item__menu__links}  key={el.id} href={`${el.path}`} >{el.name}</Link>
                        })
                    }
                    </div>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/ilmiy' >Ilmiy jurnallar</Link>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/ilmiy' >INNO Texnopark</Link>
                </li>
               </ul>    

             

        </div>
    );
}

export default Navbar;
