import React from 'react';
import Header from "../Locktwo/Header";
import Infobox from "../Locktwo/Infobox";
import Card from "../Locktwo/Card";
import Riddlebox from "../Locktwo/Riddlebox";
import Footer from "../Locktwo/Footer";
import '../Locktwo/Footer.css';
import '../pages/Responsive.css'

export const Locktwo = () => (
    <React.Fragment>
        <div>
            <Header />
        </div>
        <div>
            <div className="fl w-third pa2 pt6">
                <Infobox />
            </div>

            <div className="fl w-third pa2 tc">
                <Card />
            </div>

            <div className="fl w-third pa2 pt6">
                <Riddlebox />
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </React.Fragment>
);