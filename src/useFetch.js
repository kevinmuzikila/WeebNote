import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData ] = useState(null);
    const [isLoad , setLoad] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController;
        setTimeout(() => {
        fetch(url)
        .then(res =>  {
            if(!res.ok) {
                throw Error('Could Not Fetch Data.....');
            }
            return res.json();
        })
        .then(data =>  {
            setData(data);
            setLoad(false);
        })
        .catch (err => {
        if (err.name == 'AbortError'){
            console.log('Fetch Aborted ');
        } else {
            SetError(err.message);
            setLoad(false);
        }    
        })
    }, 1000);
    return () => abortCont.abort();
     }, [url]);

     return {data, isLoad, error }
}

export default useFetch;