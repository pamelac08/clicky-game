import React from "react";
import "./style.css";


function Score(props) {
    return (
        <div className="score">
        {props.type}: {props.score}
        </div>
    );
};

export default Score;