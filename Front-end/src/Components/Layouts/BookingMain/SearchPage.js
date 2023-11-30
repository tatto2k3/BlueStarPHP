import React, { useState } from 'react';
import "./SearchPage.css";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import RangeSlider from './NewFolder/RangeSlider';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import TicketResult from './TicketResult/TicketResult';
export default function SearchPage() {
    const [value, setValue] = React.useState([1, 800]);
    const [minPrice, setMinPrice] = useState(value[0]);
    const [maxPrice, setMaxPrice] = useState(value[1]);
    return ( <Grid container spacing={2}>
                    <Grid item md={4}>
                        < Paper className="custom-paper">
                            <div className="filter_header">
                                <h5 className="filter_header_left" >
                                Filter
                                </h5>
                                <h6 className="filter_header_right">
                                Reset
                                </h6>
                            </div>
                            {/*filter main*/}
                            <div className="filter-main">
                                <div className="filter-main-header">
                                Departure time
                                </div>
                                <div className="filter-wrapper">
                                    <Grid container spacing={2}>
                                        <Grid item sm={6}>
                                            <div className="time-line">
                                                <div className="filter-icon">
                                                    <LightModeOutlinedIcon/>
                                                </div>
                                                <div className="filter-time">
                                                    Morning
                                                </div>
                                                <span className="filter-time-detail">
                                                  00:00 - 11:59
                                                </span>
                                            </div>

                                        </Grid>
                                        <Grid item sm={6}>
                                            <div className="time-line">
                                                <div className="filter-icon">
                                                    <DarkModeIcon />
                                                </div>
                                                <div className="filter-time">
                                                    Night
                                                </div>
                                                <span className="filter-time-detail">
                                                    18:00 - 23:59
                                                </span>
                                            </div>

                                        </Grid>
                                        <Grid item sm={6}>
                                            <div className="time-line">
                                                <div className="filter-icon">
                                                    <WbTwilightOutlinedIcon />
                                                </div>
                                                <div className="filter-time">
                                                    Afternoon
                                                </div>
                                                <span className="filter-time-detail">
                                                    15:00 - 17:59
                                                </span>
                                            </div>

                                        </Grid>
                                        <Grid item sm={6}>
                                            <div className="time-line">
                                                <div className="filter-icon">
                                                    <LightModeOutlinedIcon />
                                                </div>
                                                <div className="filter-time">
                                                    Noon
                                                </div>
                                                <span className="filter-time-detail">
                                                    12:00 - 14:59
                                                </span>
                                            </div>

                                        </Grid>
                                    </Grid>
                                </div>
                                {/*Price*/}
                                <div className="Price">
                                    <div className="filter-main-header m-top-10">
                                      Price
                                    </div>
                                    <div className="RangeSlider-Wrapper">
                                        <RangeSlider value={value} setValue={setValue} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
                                    </div>
                                    <div className="Price-Wrapper">
                                        <Grid container spacing={2}>
                                            <Grid item sm={6}>
                                                <div className="min-price">
                                                    <p >Min Price</p>
                                                    <div className="min-price-value">
                                                        <AttachMoneyOutlinedIcon />
                                                        <h5>
                                                            {minPrice}
                                                        </h5>
                                                    </div>
                                                </div>

                                            </Grid>
                                            <Grid item sm={6}>
                                                <div className="max-price">
                                                    <p>Max price</p>
                                                <div className="max-price-value">
                                                    <AttachMoneyOutlinedIcon />
                                                        <h5>
                                                            {maxPrice}
                                                    </h5>
                                                </div>

                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                        </ Paper>
                    </Grid>
                    <Grid item md={8}>
                        <div className="sort_header">
                            <h6>
                                We have 4 tickets from Ho Chi Minh to Ha Noi
                            </h6>
                        </div>
                        <div>
                            <TicketResult />
                            <TicketResult />
                            <TicketResult />
                            <TicketResult />
                           
                        </div>
                    </Grid>
                </Grid>  
    )
}