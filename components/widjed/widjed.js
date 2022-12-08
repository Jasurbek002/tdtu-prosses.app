
import { useEffect } from 'react';

function HeroWidget() {

    useEffect(() => {

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbols": [
                {
                    "proName": "FOREXCOM:TDTU",
                    "title": "Ушбу сайт №MRB-2021-552 “Raqamli transformatsiya sharoitida texnika universitetning innovatsion muhitini rivojlantirish modelini ishlab chiqish (Belarus milliy texnika universiteti va Islom Karimov nomidagi Toshkent davlat texnika universiteti misolida)” «Разработка модели развития инновационной среды технического университета в условиях цифровой трансформации (на примере Белорусского национального технического университета и Ташкентского государственного технического университета имени Ислама Каримова)» (Илмий рахбар: ф.-м.ф.д., проф. Ш.Нематов) лойихаси доирасида яратилди"
                },
            ],
            "showSymbolLogo":true,
            "colorTheme": "dark",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "en"
        });

        document.getElementById("myContainer").appendChild(script);

    }, []);



    return (
        <>
            <div id="myContainer">
                <div className="tradingview-widget-container">
                    <div className="tradingview-widget-container__widget">

                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroWidget