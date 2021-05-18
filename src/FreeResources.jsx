import React from "react";
import Heading from "./Heading.jsx";
import Middle from "./free/Middle.jsx";
import Header from "./free/Header.jsx";



function FreeResources(){
    return(
        <div className="container-fluid" style={{backgroundColor:'#f0ede9'}}>
          <Header/>
          <div className="pt-5">
            <Heading moreClasses="center" weight="700" text="Important Topics For Placement" />
          </div> 
          
             <Middle/>
          
        </div>
    );
}


export default FreeResources;