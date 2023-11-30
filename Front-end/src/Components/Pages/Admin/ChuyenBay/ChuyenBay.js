import React from "react";
import './ChuyenBay.css';
import { useState, useEffect } from 'react';
import moment from "moment";
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const ChuyenBay = () => {
    const [chuyenbays, setChuyenbays] = useState([])
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/ChuyenBay_Them');
    };

    useEffect(() => {
        fetch("api/chuyenbay/GetChuyenbays")
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson); 
                setChuyenbays(responseJson);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [])
    return (
        <div className="col-md-10 main">
        <div className="container mt-md-6">
          <div className="navbar d-flex justify-content-between align-items-center">
            <h2 className="main-name mb-0">Thông tin chuyến bay</h2>
            {/* Actions: Đổi mật khẩu và Xem thêm thông tin */}
            <div className="dropdown">
              <a className="d-flex align-items-center dropdown-toggle" href="#" role="button" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="bi bi-person-circle" /> 
              </a>
              {/* Dropdown menu */}
              <div className="dropdown-menu" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="password_KhachHang.html">Đổi mật khẩu</a>
                <a className="dropdown-item" href="profile_KhachHang.html">Xem thêm thông tin</a>
              </div>
            </div>
          </div>
          {/*thanh tìm kiếm với bộ lọc*/}
          <div className="find mt-5">
            <div className="d-flex w-100 justify-content-start align-items-center">
              <i className="bi bi-search" />
              <span className="first">
                <input className="form-control" placeholder="Tìm kiếm ..." />
              </span>
              <span className="second">Filters <i className="bi bi-chevron-compact-down" /></span>
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>flyID</th>
                <th>Pl_ID</th>
                <th>fromLocation</th>
                <th>toLocation</th>
                <th>departureTime</th>
                <th>arrivalTime</th>
                <th>departureDay</th>
                <th>originalPrice</th>
              </tr>
            </thead>
            <tbody>
                        {chuyenbays.map((item, index) => (
                            <tr key={index}>
                                <td>{item.flyId}</td>
                                <td>{item.plId}</td>
                                <td>{item.fromLocation}</td>
                                <td>{item.toLocation}</td>
                                <td>{moment(item.departureTime).format("HH:mm")}</td>
                                <td>{moment(item.arrivalTime).format("HH:mm")}</td>
                                <td>{moment(item.departureDay).format("DD-MM-YYYY")}</td>
                                <td>{item.originalPrice}</td>
                            </tr>
                        ))}
            </tbody>
          </table>
          {/*3 nut bam*/}
          <div className="d-flex justify-content-end my-3">
                    <button className="btn btn-primary mr-2" id="btnThem" onClick={handleClick}>Thêm</button>
            <button className="btn btn-danger mr-2" id="btnXoa">Xóa</button>
            <button className="btn btn-warning" id="btnSua">Sửa</button>
          </div>
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex={-1}>Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </div>
      </div>
      
    );
}
export default ChuyenBay;