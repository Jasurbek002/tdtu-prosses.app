import Image from "next/image";
import stdent from '../../public/assets/images/student.svg';
import stdents from '../../public/assets/images/students.svg';
import teacher from '../../public/assets/images/teachers.svg';
import partner from '../../public/assets/images/partner.svg';



const Score = ({fakul,students,teachers,forwork}) => {
    return (
        <div className={'flex w-full h-64 mt-12 items-start justify-evenly flex-wrap '}>
            
            <div className="flex flex-col items-center  bg-white rounded-full  relative spin">
                <Image className="w-10 h-10" src={stdents} alt='icon' />
                 <h1 className='text-blue'>{students} +</h1>
                 <p className='info'>Bakalavrlar</p>
            </div>
            <div className="flex flex-col bg-white rounded-full items-center   relative spin">
                <Image className="w-10 h-10" src={stdent} alt='icon' />
                 <h1 className='text-blue'>{fakul} +</h1>
                 <p className='info'>Magistrlar</p>
            </div>
            <div className="flex flex-col items-center  bg-white rounded-full  relative spin">
                <Image className="w-10 h-10" src={teacher} alt='icon' />
                 <h1 className='text-blue'>{teachers} +</h1>
                 <p className='info'>Professorlar</p>
            </div>
            <div className="flex flex-col items-center  bg-white rounded-full  relative spin">
                <Image className="w-10 h-10 " src={partner} alt='icon' />
                 <h1 className='text-blue'>{forwork} +</h1>
                 <p className='info'>Hamkorlar</p>
            </div>
            <div className='w-full h-52  mt-14 absolute -z-30 liner'></div>
        </div>
    );
}

export default Score;
