import { Link } from "@mui/material";
import Image from "next/image";
import settings from '../../public/assets/images/mexanika.png'

import styles from './../../styles/fuculy.module.scss'

const Fuculy = () => {

  const fuculty = [
    {id:1,name:'Mexanika fakulteti'},
    {id:2,name:'Elelktr energetika fakulteti'},
    {id:3,name:'Mashinasozlik fakulteti'},
    {id:4,name:'Muhandislik texnologiyalari fakulteti'},
    {id:5,name:'Elektronika va avtomatika fakulteti'},
    {id:6,name:'Geologiya-qidiruv va kon-mettalurgiya  fakulteti'},
    {id:7,name:'Neft va gaz fakulteti'},
    {id:8,name:'Issiqlik energetikasi fakulteti'}
  ]

    return (
        <div className={styles.Fuculy}>
           <div className='flex w-full items-center justify-evenly my-20'>
                <span className="w-96 h-1 bg-blue"></span>
                <h1 className='text-grey text-2xl'>Fakultetlar</h1>
                <span className="w-96 h-1 bg-blue"></span>
            </div>
         {
             fuculty.map((el,index) =>{
              return (
                <Link href="/"
                id="Link"
                 key={index}
                 className={
                  'flex items-center justify-between items-center justify-around shadow-4xl w-96 border-2 border-oqroq  h-24 bg-white relative'
                  }>
                  <Image className={'w-7 h-7'} src={settings} alt='icon' />
                   <p className={'text-grey'}>{el.name}</p>
                   <span className='absolute bottom-0 w-0  bg-blue h-1'></span>
                </Link>
              )
             })
         }
        </div>
    );
}

export default Fuculy;
