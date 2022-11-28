import Link from 'next/link';
import styles from '../styles/navbar.module.scss'

import {items1,items2,items3,items4,items5,items6} from '../components/data/items'

const Navbar = () => {

    return (
        <div className={styles.Navbar}>
              <ul className={styles.Navbar__nav}>
                <li  className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/' >Home</Link>
    
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/doctarant/doktarant' >Doktarantura</Link>
                    <div className={styles.Navbar__nav__item__menu}>
                     <p>{items1[0]}</p>
                    {
                        items1?.map((el)=>{
                            return <Link  className={styles.Navbar__nav__item__menu__links}  key={el.id} href={`${el.path}`} > {el.name}</Link>
                        })
                    }
                    </div>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/tadqiqot/tadqiqot' >Ilmiy-tadqiqot</Link>
                    <div className={styles.Navbar__nav__item__menu}>
                     <p>{items2[0]}</p>
                    {
                        items2?.map((el)=>{
                            return <Link key={el.id} className={styles.Navbar__nav__item__menu__links} href={`${el.path}`} >{el.name}</Link>
                        })
                    }
                    </div>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/reyting/reyting' > Reyting </Link>
                    <div className={styles.Navbar__nav__item__menu}>
                     <p>{items3[0]}</p>
                    {
                        items3?.map((el)=>{
                            return <Link key={el.id} className={styles.Navbar__nav__item__menu__links}   href={`${el.path}`} >{el.name}</Link>
                        })
                    }
                    </div>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/talaba/talaba' >Iqtidorli-talabalar</Link>
                    <div className={styles.Navbar__nav__item__menu}>
                     <p>{items4[0]}</p>
                    {
                        items4?.map((el)=>{
                            return <Link key={el.id} className={styles.Navbar__nav__item__menu__links}  href={`${el.path}`} >{el.name}</Link>
                        })
                    }
                    </div>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/tijorat/tijorat' >Tijoratlashtirish</Link>
                    <div className={styles.Navbar__nav__item__menu}>
                     <p>{items5[0]}</p>
                    {
                        items5?.map((el)=>{
                            return <Link key={el.id} className={styles.Navbar__nav__item__menu__links} href={`${el.path}`} >{el.name}</Link>
                        })
                    }
                    </div>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/jurnal/jurnal' >Ilmiy jurnallar</Link>
                    <div className={styles.Navbar__nav__item__menu}>
                     {/* <p>{items6[0]}</p> */}
                    {
                        items6?.map((el)=>{
                            return <Link key={el.id} className={styles.Navbar__nav__item__menu__links}   href={`${el.path}`} >{el.name}</Link>
                        })
                    }
                    </div>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/' >INNO Texnopark</Link>
                </li>
               </ul>    

        </div>
    );
}

export default Navbar;
