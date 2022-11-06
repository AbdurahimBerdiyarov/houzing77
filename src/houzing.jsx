import React from "react";
import Apartment from "./start.jsx";
import Vector from "./images/Vector.png";
import Dom from "./images/dom.png";
import Status from "./images/Status.png";
import Price from "./images/Price.png";
import Advanced from "./images/Advanced.png";
import Search from "./images/Search.png";
import Icon from "./images/icon-vector.png";
import avatar2 from "./avatars/avatar2.png";
import avatar1 from "./avatars/avatar1.png";
import avatar3 from "./avatars/avatar3.png";
import cottage from "./images/cottage.png";
import cottage2 from "./images/cottage2.png";



class Properties extends React.Component {
    render() {
        return(
            <div>
                 <div>
                <div className="navbar">
                    <img className="nav-img" src={Vector} alt="" />

                    <div className="text-box">
                        <p className="nav-text">Home</p>
                        <p className="nav-text">Properties</p>
                        <p className="nav-text">Contacts</p>
                    </div>

                    <button className="nav-btn">Login</button>

                </div>

                <div className="adress-box">
                    
                    <div className="input-box">
                        <img className="dom-img" src={Dom} alt="" />
                        <input className="zone" type="text" placeholder="Enter an address, neighborhood, city, or ZIP code" />
                        
                    </div>

                    <div className="status-box">
                        <img className="status-img" src={Status} alt="" />
                        <button className="status-btn">Status</button>

                    </div>

                    <div className="Price-box">
                        <img className="Price-img" src={Price} alt="" />
                        <button className="Price-btn">Price</button>

                    </div>

                    <div className="Advanced-box">
                        <img className="Advanced-img" src={Advanced} alt="" />
                        <button className="Advanced-btn">Advanced</button>

                    </div>

                    <div className="Search-box">
                        <img className="Search-img" src={Search} alt="" />
                        <button className="Search-btn">Search</button>

                    </div>

                            

                </div>

                            <div className="properties-box">
                                <h1 className="properties-header">Properties</h1>
                                <p className="properties-text">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>

                            </div>

                            <div className="results-box">
                                <p className="results">13,474 results</p>

                                <div className="sortby-box">
                                    <button className="sortby">Sort by: Newest Listings</button>
                                    <img  src={Icon} alt="" />
                                    <div className="hrline"></div>
                                </div>

                            </div>

            </div>
            <div className="houzing-info">
               <Apartment
               avatar={avatar1}
               cottage={cottage}


               />
               <Apartment
               avatar={avatar2}
               cottage={cottage2}
               />
               <Apartment
               avatar={avatar3}
               cottage={cottage}

               
                />
               <Apartment 
               avatar={avatar1}
               cottage={cottage}

               />
               <Apartment 
               cottage={cottage2}

               avatar={avatar2}

               />
               <Apartment 
               avatar={avatar1}
               cottage={cottage}

               />
               <Apartment 
               avatar={avatar1}
               cottage={cottage}

               />
               <Apartment 
               cottage={cottage2}

               avatar={avatar2}
               />
               <Apartment 
               avatar={avatar1}
               cottage={cottage}

               />
               <Apartment
               avatar={avatar1}
               cottage={cottage}

               />
               <Apartment 
               cottage={cottage2}

               avatar={avatar2}
               />
               <Apartment 
               avatar={avatar1}
               cottage={cottage}

               />
               <Apartment 
               avatar={avatar2}
               cottage={cottage}

               />
               <Apartment 
               cottage={cottage2}

               avatar={avatar1}
               />
               <Apartment 
               avatar={avatar2}
               cottage={cottage}

               />

            </div>
                
            
            </div>
        );
    }
}

export default Properties;

