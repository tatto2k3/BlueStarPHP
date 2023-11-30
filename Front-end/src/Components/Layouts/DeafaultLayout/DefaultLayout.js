import React from 'react';
import Booking from '../BKP/Booking';
import Container from '@mui/material/Container';
import Header from '../Header/Header';
import "./DefaultLayout.css"
import Footer from '../Footer/Footer';
export default function DefaultLayOut({children }) {
    return (
        <>
            <Header />
            <div className="body-main">
            <Booking/>
                {/*Booking main*/}
                <div className="Booking-Main-Body">
                    <Container
                        maxWidth="lg"
                        className="custom-container"
                    >
                        {children}
                    </Container>
                </div>
               
            </div>
            <Footer />
        </>
    )
}