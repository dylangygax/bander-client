import React from "react";
import routes from "../config/routes";
import Header from "../components/Header";


function AppBody() {
    return (
        <div>
            <Header />
            {routes}
        </div>
    );
}

export default AppBody;