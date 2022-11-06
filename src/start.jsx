// import { render } from "@testing-library/react";
import React from "react";
import "./index.css";
import cottage from "./images/cottage.png";
import avatar from "./avatars/avatar1.png";
import iconbeds from "./images/icon-beds.png";
import iconbaths from "./images/baths.png";
import iconcar from "./images/icon-car.png";
import iconft from "./images/icon-sq-ft.png";
import iconzoom from "./images/zoom.png";
import iconlike from "./images/like.png";







class Apartment extends React.Component {
    render() {
        return(
           <div className="container">
            <div className="box">
                <div className="box-images">
                    <img src={this.props.cottage} alt="" />

                     <button className="btn-fea">FEATURED</button>
                     <button className="btn-for">FOR SALE</button>
                     <div>
                        <img className="avatar-img" src={this.props.avatar} alt="" />
                     </div>

                </div>

                <div className="apartment">
                    <h1 className="apaertment-header">New Apartment Nice Wiew</h1>
                    <p className="apartment-text">Quincy St, Brooklyn, NY, USA</p>

                </div>

                <div className="selection-box">
                    <div className="beds">
                        <img src={iconbeds} alt="" />
                        <p className="beds-text">4 Beds</p>

                    </div>

                    <div className="baths">
                        <img src={iconbaths} alt="" />
                        <p className="baths-text">5 Baths</p>

                    </div>

                    <div className="carage">
                        <img src={iconcar} alt="" />
                        <p className="carage-text">1 Garage</p>

                    </div>

                    <div className="sq-ft">
                        <img src={iconft} alt="" />
                        <p className="sq-ft-text">1200 Sq Ft</p>

                    </div>

                </div>

                <hr className="line" />

                <div className="cheap-price-box">

                    <div className="cheap-price-mini">
                        <p className="cheap-price-text">$2,800/mo</p>
                        <h1 className="discount-price">$7,500/mo</h1>
                    </div>

                    <div className="like-box">
                        <img src={iconzoom} alt="" />
                        <img src={iconlike} alt="" />


                    </div>



                </div>



            </div>
            

           </div>

        );
    }
}

export default Apartment;