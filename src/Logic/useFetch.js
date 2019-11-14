import  { useState, useEffect } from 'react';

export const useFetch = (url, newNote) => {
    // console.log(newNote)
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResponse(json);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);
    if (Object.keys(newNote).length) {
        response.notes.push(newNote)
    }
    return { response, error };
};