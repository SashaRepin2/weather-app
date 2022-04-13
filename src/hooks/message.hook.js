import { useCallback } from 'react'
import { store } from 'react-notifications-component';

export const useMessage = () => {
    return useCallback((titleMess = 'Header:', textMess = 'empty', typeMess = 'info') => {

        if (titleMess && textMess && typeMess) {
            store.addNotification({
                title: titleMess,
                message: textMess,
                type: typeMess,
                insert: "top",
                container: "bottom-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });

            // Выводим сообщение в console
            console.log(` Message: header: ${titleMess}, text: ${textMess}, type: ${typeMess} `)
        }
    }, [])
}