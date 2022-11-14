import Image from "next/image";
import settings from '../../public/assets/images/mexanika.png'

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
        <div className={'w-full flex flex-wrap items-center justify-evenly mt-10 '}>
           <div className='flex w-full items-center justify-evenly my-20'>
                <span className="w-96 h-1 bg-blue"></span>
                <h1 className='text-grey text-2xl'>Fakultetlar</h1>
                <span className="w-96 h-1 bg-blue"></span>
            </div>
         {
             fuculty.map((el) =>{
              return (
                <div key={el.id} className={'flex items-center justify-between items-center justify-around shadow-md w-80 border-2 border-oqroq  h-20 m-3  bg-kokroq rounded-xl'}>
                  <Image className={'w-7 h-7'} src={settings} alt='icon' />
                   <p className={'text-grey'}>{el.name}</p>
                </div>
              )
             })
         }
        </div>
    );
}

export default Fuculy;
