import React from 'react';
import  Header  from "../Lockone/Header";
import  Infobox  from "../Lockone/Infobox";
import  Card  from "../Lockone/Card";
import  Riddlebox  from "../Lockone/Riddlebox";
import Footer  from "../Lockone/Footer";
import '../Lockone/Footer.css';
import '../pages/Responsive.css'

export const Lockone = () => (
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