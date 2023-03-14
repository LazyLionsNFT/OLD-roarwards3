import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Token from "./Token";
import Discord from "./Discord";

const RoutesTree = ({match}) => {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/:token" element={<Token/>}/>
                <Route exact path="discord/:member_id" element={<Discord/>}/>
                {/* <Route path="*" element={<NotFound/>}/> */}
            </Routes>
        </div>
    );

};

export default RoutesTree;