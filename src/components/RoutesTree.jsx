import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Token from "./Token";

const RoutesTree = ({match}) => {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/:token" element={<Token/>}/>
                {/* <Route path="*" element={<NotFound/>}/> */}
            </Routes>
        </div>
    );

};

export default RoutesTree;