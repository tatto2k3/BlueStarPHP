import * as React from 'react';
import Paper from '@mui/material/Paper';
import "./TicketResult.css"
import { useNavigate } from 'react-router-dom';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
export default function TicketResult()
{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/ticket'); // Sử dụng navigate để chuyển trang
    };
    return (
       
        <div className="Ticket-Wrapper" onClick={handleClick} >
            <div className="Ticket-Left" >
            <div className="Logo-Wrapper">
                <div className="Logo-Image">
                        <img src="https://www.vietjetair.com/static/media/vj-logo.0f71c68b.svg"/>
                </div>
            </div>
            <div className="schedule">
                    <div className="schedule-depart">
                        <p className="schedule-header">
                        Depart
                        </p>
                        <h5 className="schedule-time">
                        20:30
                        </h5>
                        <p className="schedule-date">
                        4 Octorber 2023
                        </p>
                </div>
                    <div className="schedule-detail">
                        <span className="schedule-round-left">
                        </span>
                        <div className="time-duration-wrapper">

                        <div className="time-duration">
                            12 hr 30 min
                        </div>
                           
                        </div>

                        <span className="schedule-round-right"></span>
                </div>
                <div className="schedule-des">
                        <p className="schedule-header">
                            Arrive
                        </p>
                        <h5 className="schedule-time">
                            23:39
                        </h5>
                        <p className="schedule-date">
                            5 Octorber 2023
                        </p>
                </div>

            </div>
            </div>
           
            <div className="Ticket-Right">
                <p className="Price-header">
                Price
                </p>
                <div className="Price-value">
                    <AttachMoneyOutlinedIcon />
                    <p className="price-value">
                    300
                    </p>
                </div>
             </div>
             </div>
        
        
    )
}