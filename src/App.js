import './assets/css/index.css'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import { React, useEffect, useState } from 'react'
import { store } from 'react-notifications-component';


import { Weather } from './componets/contennt_box'


import { useHttpToApi } from './hooks/http.hook.weather'
import { useMessage } from './hooks/message.hook'
import { LangSwitcher } from './componets/lang_switcher'
import { SearchCity } from './componets/search_city'
import { SideMenu } from './componets/side_menu/sidemenu'


const langs = {
  ru: {
    searchText: "Введите название города",
    weather: "Погода",
    city: "Город",
    date: "Дата",
    temperature: "Температура",
  },
  en: {
    searchText: "Enter the city",
    weather: "Weather",
    city: "City",
    date: "Date",
    temperature: "Temperature",
  }
}

const settings = {
  localhost: 'http://localhost:8080',
  key: "28832b6e379fdc53475ce71e987af633",
  base: "https://api.openweathermap.org/data/2.5",
  lang: 'ru'
}

function App() {

  // Хук, выводящий сообщение
  const message = useMessage()
  const { loading, request, error, clearError } = useHttpToApi() // Хук для получения данных
  const [dateNow, setDateNow] = useState(null) // Дата
  const [weather, setWeather] = useState(null) // Погода
  const [city, setCity] = useState(null) // Город

  const [menuActive, setMenuActive] = useState(false);

  // Обновление данных о выбранном языке
  const updateSelectedLang = (value) => {
    settings.lang = value;
    console.log(settings.lang)
    searchCity();
  }

  // Обновление данных о городе
  const updateSelectedCity = (value) => {
    setCity(value)
  }

  // Searching city
  useEffect(() => {
    searchCity()
  }, [city])


  //  Отображение ошибки
  useEffect(() => {
    message(error)
  },// Вызывается при изменении данных состояний
    [error, message, clearError])


  useEffect(() => {
    if (loading) {
      message("Info:", `Searching city: ${city}`, "info")
    }

    if (loading && typeof loading === "boolean") {
      message("Success:", `The city of '${city}' was found`, "success")
    }

  }, [loading])




  // Получаем тек дату
  function getDate() {

    // Параметры времени
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      //hour: 'numeric',
      // minute: 'numeric',
      // second: 'numeric'
    };

    // Получаем текущую дату
    const date = new Date().toLocaleString(settings.lang, options);

    // Меняем заголовок сайта
    document.title = "Текущее время: " + date;

    // Выводим время на сайте
    setDateNow(date);
  }


  // Обработчик нажатия клавишь в поле ввода
  const searchCity = () => {

    console.log("Searching...")

    if (city) {
      // обращение к серверу
      getCurrentWeather();
      getDate();
      clearError()
    }
  }

  // Отправка запроса на openweather
  const getCurrentWeather = async () => {
    try {

      console.log(settings.lang)

      // Создаем url, по которому будем получать текущую погоду
      let url = settings.base + '/weather?q=' + city + "&units=metric&appid=" + settings.key + "&lang=" + settings.lang;

      // Выполняем запрос по указанному url
      let data = await request(url, 'GET')

      // Выводим в консоль
      console.log(data)
      setWeather(data)
      // setCity(null)

    }
    catch (e) {
    }
  }





  return (

    <div className="app" id="top_page">
      {<ReactNotification />}
      <header className="header top_menu">
        <div className="menu-btn" onClick={() => setMenuActive(!menuActive)}><span /></div>
        <SearchCity defaultCity={city} updateCity={updateSelectedCity} loading={loading} searchText={settings.lang === "ru" ? langs.ru.searchText : langs.en.searchText} />
        <LangSwitcher updateLangData={updateSelectedLang} getLang={settings.lang} />
      </header>

      <SideMenu active={menuActive} setMenuActive={setMenuActive} header={'Weather app'} footer={'sasharepin2016@gmail.com'} />

      <main>
        {
          (!loading && weather != null) ?
            <Weather weather={weather} dateNow={dateNow} error={error}
              titles={settings.lang === "ru" ?
                {
                  weather: "Погода",
                  city: "Город",
                  date: "Дата",
                  temperature: "Температура",
                } : {
                  weather: "Weather",
                  city: "City",
                  date: "Date",
                  temperature: "Temperature",
                }} />
            : ''
        }
      </main>

    </div>
  );
}

export default App;
