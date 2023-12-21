import React from "react";
import Shimmer from "./Shimmer";
// import corserr from '../assets/cors';


const CorsErrorByPass = () => {

    const cors_url = 'https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf';

    return (
        <div className="mt-2 mx-2 p-2">
            <h1 className="flex justify-start py-2 font-semibold text-md">If you encounter this page, it indicates browser prevents a Cross-Origin Resource Sharing (CORS) request to a different server which inturn breaks the application.</h1>
            <h2 className="flex justify-start  font-semibold text-md">To bypass this and see the application, please follow the below steps : </h2>
            <ul className="list-disc mx-5 pt-2">
                <li className="italic underline text-lg font-semibold cursor-pointer" onClick={()=>window.open(cors_url)}>Download this CORS extension from chrome, click here!</li>
                <li className="text-lg font-semibold">Activate the CORS plugin by clicking on the 'C' icon and reload to see the app running.</li>
            </ul>
            {/* <img src={corserr} alt="error-img"/> */}
            <Shimmer />
        </div>
    )

}

export default CorsErrorByPass;