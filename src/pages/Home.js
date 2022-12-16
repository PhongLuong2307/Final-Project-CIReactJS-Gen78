import React from "react";
import '../components/Home/Home.css'
import HomeHeader from "../components/Home/HomeHeader";
import HomeBody from "../components/Home/HomeBody";

const Home = () => {
    return (
        <React.Fragment>
            <div className="site-container">
                <HomeHeader />
                {/* <div style={{height: '500px'}}></div> */}
                <HomeBody />
            </div>
        </React.Fragment>
    )
}

export default Home;