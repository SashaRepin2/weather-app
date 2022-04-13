import React from 'react'
import './footer.css'

import Img_OpenWeather from '../../assets/images/logo_open_weather.png'


export const Footer = () => {

    // const [visible, setVisible] = React.useState(true)

    React.useEffect(() => {

        console.log('Footer is created')

        return () => {
            console.log('Footer is deleted')
        }
    }, [])

    return (
        <footer className="footer" id="bottom_page">
        </footer >
    )
}