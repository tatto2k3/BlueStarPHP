import React from 'react';
import { useState } from "react";
import './Booking.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useLocation } from 'react-router-dom';
export default function Booking()
{      
    const [tripType, setTripType] = useState("oneWay"); // Ban đầu chọn "1 chiều"
    const location = useLocation();
    const pathname = location.pathname;
    const routeName = pathname.split('/').filter(Boolean)[0];
    console.log(routeName);
    {/*Function thay đổi checkbox */ }
    const handleTripTypeChange = (event) => {
        setTripType(event.target.value);
        console.log(event.target.value);
    };
    return (
        <div className="booking-wrapper">
            {
               
                   ( <>
                        <div className="booking-header">
                            <div className="booking-checkbox-wrapper">
                                {/*Round-trip-one-way*/}
                                <div className="flight_one_way">
                                    <label className="option_label">
                                        <input
                                            type="radio"
                                            value="oneWay"
                                            checked={tripType === "oneWay"}
                                            onChange={handleTripTypeChange}
                                        />
                                        <span>One  Way</span>
                                    </label>
                                </div>
                                {/*Round-trip-checkbox*/}
                                <div className="flight_round-trip">
                                    <label className="option_label">
                                        <input
                                            type="radio"
                                            value="roundTrip"
                                            checked={tripType === "roundTrip"}
                                            onChange={handleTripTypeChange}
                                        />
                                        <span>Round  Trip</span>
                                    </label>
                                </div>
                            </div>

                        </div>
                        {/*Booking infobody*/}
                        <div className="booking-body">
                            <div className="booking-body-details d-flex">
                                <div className="booking-location d-flex border-booking">
                                    <div className="booking-location-time">
                                        <label className="notUp booking-body-text-color">
                                            From
                                        </label>
                                        <div className="input-main">
                                            <input type="text"
                                            />
                                            <h6 className="airport-name-day booking-body-text-color hiden">
                                                Airport
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="booking-location-time booking-border-left">
                                        <label className="notUp booking-body-text-color">
                                            To
                                        </label>
                                        <div className="input-main">
                                            <input type="text"
                                            />
                                            <h6 className="airport-name-day booking-body-text-color hiden">
                                                Airport
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                {/*Booking Time*/}
                                <div className="booking-time d-flex border-booking">
                                    <div className="booking-location-time ">
                                        <label className="notUp booking-body-text-color">
                                            Depart
                                        </label>
                                        <div className="input-main">
                                            <input type="text"
                                            />
                                            <h6 className="airport-name-day booking-body-text-color hiden">
                                                Day
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="booking-location-time booking-border-left">
                                        <label className="notUp booking-body-text-color">
                                            Arrive
                                        </label>
                                        <div className="input-main">
                                            <input type="text"
                                            />
                                            <h6 className="airport-name-day booking-body-text-color hiden">
                                                Day
                                            </h6>
                                        </div>

                                    </div>
                                    {/*passenger*/}
                                    <div className="booking-location-time booking-border-left">
                                        <label className="notUp booking-body-text-color">
                                            Passenger
                                        </label>
                                        <div className="input-main">
                                            <input type="text"
                                            />
                                            <h6 className="airport-name-day booking-body-text-color hiden">
                                                Day
                                            </h6>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        {/*Search BTN*/}
                        <div className="button_container">
                            <Button variant="contained" size="large" startIcon={<SendIcon />} className="custom-button" >
                                Search
                            </Button>
                        </div>
                    </> )
            }
           
        </div>
    )
}