import { useEffect, useState } from "react";
import axios from "axios";

const GetInfoRep = (API) => 
{
    const [infoApi, setInfoApi] = useState([]);
    useEffect( () => {
        async function fetchData()
        {
            const repositoryExample = 'CajaEmeute';
            const queryE = '&q=' + encodeURIComponent(repositoryExample);
            const response = await fetch(`${API}/search/repositories?${queryE}`);
            const answeJson = await response.json();
            setInfoApi(answeJson);
            
        }
        fetchData();
    }, []);

    return infoApi;
}

export default GetInfoRep;