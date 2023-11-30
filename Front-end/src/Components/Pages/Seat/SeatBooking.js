import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./SeatBooking.css";
export default function SeatBooking() 
{
    const seat = ["A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1","A1","A2","A3","A4"];
    return (
        <Paper className="seat-paper">
            <div className="plane-head"><p>Chọn ghế ngồi</p></div>
            <div className="plane-wrapper">
                <div className="plane-body">
                    <Grid container spacing={2}>
                        {
                            seat.map((seat, index) => {
                                return (
                                    <Grid item md={1} key={index}>
                                        <div className="seat-item">
                                            {seat}
                                        </div>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </div>
                <div className="plane-head">
                    <img src="/Images/planeeeee.png"/>
                </div>
            </div>
        </Paper>
    )
}