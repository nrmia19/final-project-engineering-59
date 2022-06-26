import React from "react";
import Navigasi from "./Navigasi";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const LandingPage = () => {
    return (
        <>
            <div className="landing-page">
                <nav>
                    <Navigasi />
                </nav>
                <header>
                    <Header />
                </header>
                <main>
                    <Content />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

export default LandingPage;