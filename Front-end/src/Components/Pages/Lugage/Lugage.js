import React, { useState } from 'react';
import "./Lugage.css";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
export default function Luggage() {
    return (
        <Paper className="luggage-paper">
            <div className="luggage-head"><p>Chọn hành lý</p></div>
            <div className="luggage-wrapper">
            
                <div className="adults && children">
                    <div className="luggage-image">
                        <img src="/Images/Adult.png"/>
                    </div>
                    <h3 className="luggage-title">
                    Adults and Children
                    </h3>
                </div>
                <div className="Infant">
                    <div className="luggage-image">
                        <img src="/Images/Infant.png" />
                    </div>
                    <h3 className="luggage-title">
                     Infant
                    </h3>
                </div>
                <div className="Hand-Luggage">
                    <div className="luggage-image">
                        <img src="/Images/Hand.png" />
                    </div>
                    <h3 className="luggage-title">
                    Hand luggage
                    </h3>
                </div>
            </div>
        </Paper>
    )
}