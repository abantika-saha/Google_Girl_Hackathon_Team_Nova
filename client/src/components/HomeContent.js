import React from 'react';
import Header from "./Header.js";
import AdImage from "../components/homeContent/adImage";
import Feature1 from "../components/homeContent/featureDiv/featureDiv1";
import Feature2 from "../components/homeContent/featureDiv/featureDiv2";
import Recommendations from "../components/homeContent/recommendations/recommendations";
import FillerDiv from "../components/homeContent/fillerDiv";
import TopCategories from "../components/homeContent/topCategories/topCategories";
import BecomeInstructor from "../components/homeContent/becomeInstructor";


import VideoAdDiv from "../components/homeContent/videoAdDiv";

function HomeContent() {
    return (
        <div>
            <Header></Header>
            <AdImage />
            <Feature1 />
            <Recommendations />
           <TopCategories />
            <BecomeInstructor />
            
        </div>
    );
}

export default HomeContent;