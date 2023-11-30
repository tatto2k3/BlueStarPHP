import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./TicketPage.css";
export default function TicketPage ()
{
    return (
        
        <Paper className="ticket-wrapper">
            <div className="ticket-header">
                <h5 className="ticket-header-title">
                    Select Title
                </h5>
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <div className="vocative">
                        Mr
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="vocative">
                            Mrs
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="vocative">
                            Ms
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="ticket-body">
                <Grid container spacing={2}>

                <Grid item md={6}>
                    <div className="ticket-input-wrapper">
                            <label className="ticket-label">First Name</label>
                            <input className="ticket-input" placeholder="First Name"></input>
                        </div>
                        <div className="ticket-input-wrapper">
                            <label className="ticket-label">Date Of Birth</label>
                            <input className="ticket-input" placeholder="Date Of Birth"></input>
                        </div>
                        <div className="ticket-input-wrapper">
                            <label className="ticket-label">Country</label>
                            <input className="ticket-input" placeholder="Country"></input>
                        </div>
                        <div className="ticket-input-wrapper">
                            <label className="ticket-label">Contact</label>
                            <input className="ticket-input" placeholder="Contact"></input>
                        </div>
                    </Grid>

                    <Grid item md={6}>
                        <div className="ticket-input-wrapper">
                            <label className="ticket-label">Last Name</label>
                            <input className="ticket-input" placeholder="Last Name"></input>
                        </div>
                        <div className="ticket-input-wrapper">
                            <label className="ticket-label">Passport Number</label>
                            <input className="ticket-input" placeholder="Passport Number"></input>
                        </div>
                        <div className="ticket-input-wrapper">
                            <label className="ticket-label">City</label>
                            <input className="ticket-input" placeholder="City"></input>
                        </div>
                        <div className="ticket-input-wrapper">
                            <label className="ticket-label">Email</label>
                            <input className="ticket-input" placeholder="Email"></input>
                        </div>

                    </Grid>
                    
                </Grid>
                
               
            </div>
            
            
        </Paper>
      
    )
}