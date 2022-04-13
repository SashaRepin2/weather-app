
import { React } from 'react'
import './side_menu.css'



export const SideMenu = ({ header, footer, active, setMenuActive }) => {


    return (
        <div>
            <div className={active ? "blur active" : "blur"} onClick={() => { setMenuActive(false); console.log("click") }} />
            <div className={active ? "side_menu active" : "side_menu"}>
                <div className="content_side_menu">
                    <div className="header_side_menu">
                        {header ? header : 'Weather App'}
                    </div>
                    <div className="options_side_menu">
                        <ul>
                            <li className="option">
                                Измеренение: °F/°С
                            </li>
                            <li className="option">
                                Кастомный фон:
                            </li>
                        </ul>
                    </div>

                    <div className="footer_side_menu">
                        {footer ? footer : "sasharepin2016@gmail.com"}
                    </div>
                </div>
            </div>
        </div>
    )
}