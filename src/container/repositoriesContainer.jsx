import React from "react";
import CardRepo from "../modulos/cardRepo.jsx";
import GetInfoRep from "../modulos/axios";

import '../Css/cardRepo.css';


const APi = 'https://api.github.com';
const numOfRepoPerPage = 6;
const ContainerRepo = () =>
{
    const infoApi = GetInfoRep(APi);
    return(
        <section className="main-container">
            <div className="cards-container">
                <CardRepo repoName={infoApi.items[0].name} repoLenguage={infoApi.items[0].language}/>
            </div>
        </section>
    );
}

export default ContainerRepo;