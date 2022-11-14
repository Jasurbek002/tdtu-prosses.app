import Image from 'next/image'
import styles from '../styles/footer.module.scss'
import telegram from '../public/assets/images/telegram.svg'
import instagram from '../public/assets/images/instagram.svg'
import youtube from '../public/assets/images/youtube.svg'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.Footer}>

           <ul className={styles.Footer__nav}>
                <li className={styles.Footer__nav__item}>
                    <a className='no-underline flex w-60 items-center ' href='#'><Image className='w-10 h-10' src={telegram} alt='icon' />  telegram</a>
                </li>
                <li className={styles.Footer__nav__item}>
                    <a className='no-underline flex items-center ' href='#'><Image className='w-10 h-10' src={instagram} alt='icon' />  instagram</a>
                </li>
                <li className={styles.Footer__nav__item}>
                    <a className='no-underline flex items-center' href='#'><Image className='w-10 h-10' src={youtube} alt='icon' />  youtube</a>
                </li>
           </ul>

          <ul>
            <li className=''>
                <Link href='/' >Manzil:Toshkent shaxar universitet ko'chasi 2-uy</Link>
            </li>
            <li className=''>
                <Link href='/' >Ilmiy bolim haqida</Link>
            </li>
            <li className=''>
                <Link href='/' >tel:+99871 000 00 00</Link>
            </li>
            <li className=''>
                <Link href='/' >TDTU fakultetlari</Link>
            </li>
            <li className=''>
                <Link href='/' >Texnopark</Link>
            </li>
          </ul>
          <div className={styles.Footer__map}>
          <iframe className={styles.Footer__map__item} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7750.169201656863!2d69.19970163012668!3d41.353714196145624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c3da3c6e5c3%3A0x9882f2a6b7329d1d!2sTDTU!5e0!3m2!1sru!2s!4v1667632619793!5m2!1sru!2s" width="400" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
    );
}

export default Footer;
