import { useEffect } from 'react'

export const useCustomTitle = (title) => {

    useEffect(()=> {
        const setTitle = () => {
            document.title = `${title} / Cinemate`
        }
        setTitle();
    },[title])
    
    return (null)
}
