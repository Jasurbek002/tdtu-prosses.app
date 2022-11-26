
import fundamental from './../../../public/assets/images/construction.png';
import practical from './../../../public/assets/images/amaily.png';
import inno from './../../../public/assets/images/inno.png';
import xalqaro from './../../../public/assets/images/xalqaro.png';
import MyLink from '../../../components/Link/link';

const Loyha = () => {
    return (
        <div className='w-full flex items-center flex-wrap justify-around py-20'>
            <h1 className='w-full text-center py-2 my-10 rounded-md bg-blue w-11/12 text-white'>Bizning Loyixalar</h1>
            <MyLink path={'/tadqiqot/loyha/fundament'} title={'Xalqaro loyihalar'} icon = {fundamental}/>
            <MyLink path={'/tadqiqot/loyha/practical'} title={'Xalqaro loyihalar'} icon = {practical}/>
            <MyLink path={'/tadqiqot/loyha/inno'} title={'Xalqaro loyihalar'} icon = {inno}/>
            <MyLink path={'/tadqiqot/loyha/inter'} title={'Xalqaro loyihalar'} icon = {xalqaro}/>
        </div>
    );
}

export default Loyha;
