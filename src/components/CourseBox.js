import React from "react";

import "../styles/CourseBox.scss";

export default function CourseBox(props){

    return(
        <div className={props.completed ? "CourseBoxActive" : "CourseBoxActive CourseBoxDisactive"}     >
            <span className="title">{props.name}</span>    
            <span className="date">{props.date}</span>  
            <span className="author">{props.author}</span>  
        </div>
    )
}