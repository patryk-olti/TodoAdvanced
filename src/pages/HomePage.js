import React from "react";
import Navigation from "../containers/Navigation";
import Content from "../containers/Content";

import '../styles/Page.scss';

const HomePage = () => {
    
    return(
        <div className="HomePage">
            <Navigation />
            <Content />
        </div>
    )
}

export default HomePage;