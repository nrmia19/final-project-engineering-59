import React from "react";
import Header from "./Header";
import Content from "./Content";
// import Footer from "../LandingPage/Footer";
import Navigasi from "./Navigasi";

const Home = () => {
    return (
        <>
            <Navigasi />
            <Header />
            <Content />
            {/* <Footer /> */}
        </>
    );
}

export default Home;