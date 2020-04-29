import React from 'react';
import Header from "../Lockthree/Header";
import Infobox from "../Lockthree/Infobox";
import Card from "../Lockthree/Card";
import Riddlebox from "../Lockthree/Riddlebox";
import Footer from "../Lockthree/Footer";
import '../Lockthree/Footer.css';
import '../pages/Responsive.css'

export const Lockthree = () => (
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