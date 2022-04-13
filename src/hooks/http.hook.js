import { useState, useCallback } from 'react'

export const useHttp = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {

            // Если присутствует передаваемые данные, то формируем json-объект
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
                headers['charset'] = 'utf-8';
            }

            // Отправляем запрос
            const response = await fetch(url, { method, body, headers });



            // Ожидаем ответа
            const data = await response.json();

            // Проверяем статус 
            if (!response.ok) {
                // Выводим ошибку, если есть такая
                throw new Error(data.message || 'Что-то пошло не так');
            }

            setLoading(false)
            return data

        } catch (e) {
            // Сообщаем об ошибке
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}