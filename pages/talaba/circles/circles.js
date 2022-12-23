import React from 'react';
import Accardion from '../../../components/accardion/accardion';

const Circles = () => {
    return (
        <div className='w-full flex flex-col items-center p-5'>
            <h1 className='text-2xl text-center w-full py-5 text-blue border-b-2'>To'garaklar</h1>
         
            <div className='px-2 py-5 w-10/12 flex items-center flex-col'>
            <Accardion />
            <Accardion />
            <Accardion />
            <Accardion />
            <Accardion />
            <Accardion />
            </div>

    
       
         <p className='text-grenn text-xl top-0 w-10/12'>
           TITning asosiy maqsadi talabalarning ilmiy-tadqiqot ishlarini 
rivojlantirishga yordam berish, nazariy va amaliy bilim darajasini oshirish, talabalar 
ilmiy to‘garagi doirasida innovatsion jarayonlarda ishtirok etish va boshqarish 
ko‘nikmalarini rivojlantirish, amaliy muammolarni hal qilishda loyiha faoliyatida 
ko‘nikmalarni shakllantirish, tadqiqot kompetensiyalarini shakllantirish uchun 
qulay shart-sharoitlarni yaratish va rivojlantirish, har bir o‘quvchiga o‘z qobiliyati 
va ehtiyojlariga mos ravishda o‘z shaxsiyatini ijodiy rivojlantirish huquqini amalga 
oshirish imkoniyatini ta’minlash, ilmiy-pedagogik kadrlar zaxirasini shakllantirish 
uchun istiqbolli va iqtidorli yoshlarni tanlashdan iborat.
2.2. TITning asosiy vazifalari quyidagilardan iborat:
- talabalarning ilmiy tayyorgarlik darajasini oshirishga yordam berish;
- talabalarnin ijodiy faoliyatni shakllantirish uchun sharoit yaratish;
- talabalarning kasbiy tayyorgarligi sifatini oshirish;
- talabalarga mustaqil ilmiy izlanishlar olib borishlariga amaliy yordam berish 
va ularning ilmiy ishlarini tashkiliy ta’minlash;
- iqtidorli va qobiliyatli talabalarni aniqlash, ta’lim jarayoni samaradorligini 
oshirishning dolzarb masalalarini hal etishda ularning ijodiy va intelektual 
salohiyatlaridan foydalanish;
- talabalarni Davlat ilmiy-texnik dasturlari doirasida amalga oshiriladigan 
loyihalar va xo‘jalik shartnomalari doirasidagi ilmiy-tadqiqot ishlarini bajarishga 
jalb etish;
- rejalashtirilgan ilmiy anjumanlar, tanlovlar, ko‘rgazmalar va boshqalar 
haqida talabalarni o‘z vaqtida xabardor qilish va ularda ishtirok etish imkoniyatini 
yaratish.
           </p>
        </div>
    );
}

export default Circles;
