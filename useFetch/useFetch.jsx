import React, { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    
    const [state, seState] = useState({ data: null, loading: true, error: null });


    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);
    
    
    useEffect(() => {
        seState({ data: null, loading: true, error: null });
        fetch(url).then(res => res.json())
        .then(data => {
            if(isMounted.current)
              seState({ data, loading: false, error: null });
        }).catch(() => {
            seState({ data: null, loading: false, error: 'No se pudo cargar la data' });
        });
    }, [url]);


    return state;






}
