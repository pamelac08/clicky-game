import React from "react";
import "./style.css";

function PictureCard(props) {
    return (
        <div className="card" id={props.id}>
            <div className="img-container">
                <button onClick={props.handleClick.bind(this)}><img id={props.id} alt={props.name} src={props.image} /></button>
            </div>
        </div>
    );
};

export default PictureCard;
