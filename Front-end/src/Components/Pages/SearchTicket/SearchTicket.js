import React from 'react';
import "./SearchTicket.css";

const SearchTicket = () => {
    return (
        <div className="container2">
        <div className="text-insertSearch">
            <h1>TÌM KIẾM VÉ MÁY BAY</h1>
        </div>

        <div className="white-section">

        <div className="inforSearch">
            <form className="form-signin2">
                <div className="mb-3 row text-xl-center">
                    <label htmlFor="inputFullname" className="col-sm-2 col-form-label">Họ và Tên</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-controlSearchTicket" id="inputFullname" placeholder="vd: Nguyen Van A" />
                    </div>
                </div>
                <div className="mb-3 row text-xl-center">
                    <label htmlFor="inputDay" className="col-sm-2 col-form-label">Ngày, tháng, năm</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-controlSearchTicket" id="inputDay" placeholder="" />
                    </div>
                </div>
                <div className="mb-3 row text-xl-center">
                    <label htmlFor="inputTicketCode" className="col-sm-2 col-form-label">Mã vé</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-controlSearchTicket" id="inputTicketCode" />
                    </div>
                </div>

                <div className="row text-xl-center">
                    <div className="col-sm-10">
                        <button type="submit" className="btn search" id="btnSearch">Tìm</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
    );
};
export default SearchTicket;