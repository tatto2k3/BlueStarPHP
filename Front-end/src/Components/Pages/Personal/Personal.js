import React from "react";
import "./Personal.css";
import logo from "./img.jpg";


function Personal() {


  return (
 
 <div className="containerPersonal">
    <div className = "imgPersonal">
        <img src={logo} alt=""/>
    </div>
        <div className="text-insertPersonal">
            <h1>THÔNG TIN CÁ NHÂN</h1>
        </div>

        <div className="white-sectionPersonal">

        <div className="inforPersonal">
            <form className="form-signinPersonal">
                <div className="mb-3 row text-xl-center">
                    <label htmlFor="inputFullname" className="col-sm-2 col-form-label">Họ và Tên</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-controlPersonal" id="inputFullname" placeholder="vd: Nguyen Van A" />
                    </div>
                </div>
                <div className="mb-3 row text-xl-center">
                    <label htmlFor="inputDay" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-controlPersonal" id="inputDay" placeholder="vd: nguyenvana@gmail.com" />
                    </div>
                </div>
                <div className="mb-3 row text-xl-center">
                    <label htmlFor="inputTicketCode" className="col-sm-2 col-form-label">Địa chỉ</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-controlPersonal" id="inputTicketCode" placeholder="vd: Phú Quý - Bình Thuận" />
                    </div>
                </div>

                <div className="row text-xl-center">
                    <div className="col-sm-10">
                        <button type="submit" className="btn searchPersonal" id="btnSearch">Sửa</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
  );
}

export default Personal;
