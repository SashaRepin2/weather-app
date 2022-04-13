import React, { useEffect, useState } from 'react'

export const SearchCity = ({ defaultCity, updateCity, loading, searchText }) => {




    const handleKeyPressCity = (e) => {
        if (!loading && e.key === "Enter") {

            const city = e.target.value;

            // Обновляем данные о введенном городе
            updateCity(city)

            // Очищаем поле ввода
            e.target.value = '';
        }
    }

    return (
        <div className="search-box">
            <input type="text" className="search-field" id="input_field" placeholder={searchText} autoComplete="off" onKeyPress={handleKeyPressCity} />
        </div>
    )
}