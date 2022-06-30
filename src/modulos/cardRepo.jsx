import React from "react";
import '../Css/cardRepo.css';

const CardRepo = ({repoName, repoLenguage, repoDescription, repoLink, repoStars, repoOpenIssues}) => 
{
    return(
        <div className="product-card">
        <div className="product-info">
          <div>
            <p>{repoName}</p>
            <p>{repoLenguage}</p>
            <p>{repoDescription}</p>
            <p>{repoLink}</p>
            <p>{repoStars}</p>
            <p>{repoOpenIssues}</p>
          </div>
        </div>
      </div>
    );
}

export default CardRepo;