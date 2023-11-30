import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import "./Payment.css";
export default function Payment() {
    return (
        <>
        <div className="payment-body">
            <Grid container spacing={2}>

                <Grid item md={6}>
                    <div className="payment-input-wrapper">
                        <label className="payment-label">Card Number</label>
                        <input className="payment-input" placeholder="1 2 3 4 5 6 7 8"></input>
                    </div>
                    <div className="payment-input-wrapper">
                        <label className="payment-label">Expriration</label>
                        <input className="payment-input" placeholder="MM/YY"></input>
                    </div>
                </Grid>

                <Grid item md={6}>
                    <div className="ticket-input-wrapper">
                        <label className="ticket-label">CVC</label>
                        <input className="ticket-input" placeholder="3 or 4 digits"></input>
                    </div>
                    <div className="ticket-input-wrapper">
                        <label className="ticket-label">Name on card</label>
                        <input className="ticket-input" placeholder="Passport Number"></input>
                    </div>

                </Grid>
            </Grid>

            </div>
           
        </>
    )
}