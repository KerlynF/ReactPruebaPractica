import React, {useState, useEffect} from "react";
import CardRepo from "../modulos/cardRepo";
import axios from "axios";

const APi = 'https://api.github.com/users';
const ContainerRepo = () =>
{
    const [infoApi, setInfoApi] = useState([]);
    useEffect( () => {
        async function fetchData()
        {
            const response = await axios(APi);
            setInfoApi(response.data);
        }
        fetchData();
    }, []);
    return(
        <section className="main-container">
            <div className="cards-container">
                {infoApi.map(elementApi => (
                 <CardRepo />
                ))}
            </div>
        </section>
    );
}

export default ContainerRepo;