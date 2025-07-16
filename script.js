import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";

function GithubProfile(){
    //header
    //body: 10 cardshow;

    return(
        <>
         <Header/>
         <Body/>
        </>
    )

}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<GithubProfile/>);