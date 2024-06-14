import { useEffect, useState } from "react"

export const useFetch = (apiPath, searchQuery ="") => {

    const [data, setData] = useState([]);
    
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`;

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(url);
                if (!response.ok){
                    throw new Error(response.statusText);
                }
                const data =  await response.json();
                setData(data.results)
            }
            catch(error){
               console.log(error);
            }
        };

        fetchData();
    },[url]);

    return { data }
}
