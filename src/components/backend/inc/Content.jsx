import React from "react";
import Footer from "./Footer";
 export default function Content({children}){
    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    {children}
                </div>
            </div>
            

            

            <Footer />
        </div>
    )
 }