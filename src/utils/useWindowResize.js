import { useEffect, useState } from "react";

function useWindowResize() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(()=> {
        let timeoutId;

        function handleResize() {
            clearTimeout(timeoutId); // первый раз он пустой
            timeoutId = setTimeout(setWindowWidth(window.innerWidth), 500)
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    return windowWidth;
}

export default useWindowResize;