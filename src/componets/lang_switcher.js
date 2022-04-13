import React, { useEffect } from 'react'
import { useState } from 'react'

import flagRu from '../assets/images/flags_icon/ru_flag.svg'
import flagUK from '../assets/images/flags_icon/uk_flag.svg'

export const LangSwitcher = (props) => {

    const [lang, setLang] = useState(props.getLang)

    const handleChangeLang = (event) => {
        setLang(event.target.value);
        localStorage.setItem('lang', event.target.value);
    }

    useEffect(() => {
        props.updateLangData(lang);
    }, [lang])


    useEffect(() => {
        const value = localStorage.getItem('lang')

        if (value) {
            setLang(value)
        }

    }, [])


    const showDropdown = () => {
        let event;
        event = document.createEvent('MouseEvents');
        event.initMouseEvent('mousedown', true, true, window);

        const element = document.getElementById("selecter_lang")
        element.click();
    };

    return (
        <div className="lang_switcher" onClick={showDropdown}>

            <img className="select_flag" src={lang === 'ru' ? flagRu : flagUK}></img>

            <div className="select_lang" >
                <select value={lang} onChange={handleChangeLang} id="selecter_lang">
                    <option className="select_el" value='ru'> Русский</option>
                    <option className="select_el" value='en'> English</option>
                </select>
            </div>
        </div >
    )
}