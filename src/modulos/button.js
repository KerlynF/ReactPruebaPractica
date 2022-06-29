import React from "react";
import '../Css/button.css';

function Button({text, isButtonClick})
{
    return (
        <button className={isButtonClick ? 'button-click' : 'restart-button'} >
            {text}
        </button>
    );
}
export default Button;