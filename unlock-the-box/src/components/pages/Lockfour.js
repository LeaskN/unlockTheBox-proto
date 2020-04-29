import React from 'react';
import Header from "../Lockfour/Header";
import Infobox from "../Lockfour/Infobox";
import Card from "../Lockfour/Card";
import Riddlebox from "../Lockfour/Riddlebox";
import Footer from "../Lockfour/Footer";
import '../Lockfour/Footer.css';
import '../pages/Responsive.css'

export const Lockfour = () => (
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