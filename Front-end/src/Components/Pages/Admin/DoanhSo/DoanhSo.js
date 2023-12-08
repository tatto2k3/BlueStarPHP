import React ,{ useState } from "react";
import './DoanhSo.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const DoanhSo = () => {
    const [activeTab, setActiveTab] = useState("tongQuan", "chiTiet");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const tabContent = {
    tongQuan: <p>Dữ liệu tổng quan sẽ được hiển thị ở đây</p>,
    chiTiet: (
      <table className="table table-bordered">
        {/* Nội dung của bảng điền vào đây */}
        <thead>
                    <tr>
                      <th />
                      <th>T_ID</th>
                      <th>CCCD</th>
                      <th>Name</th>
                      <th>Fly_ID</th>
                      <th>Kg_ID</th>
                      <th>Seat_ID</th>
                      <th>Food_ID</th>
                      <th>Ticket_Price</th>
                      <th>Mail</th>
                      <th>Dis_ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Table content goes here */}
                    <tr>
                      <td contentEditable="true" className="choose">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td contentEditable="true" className="editable_T_ID_1">T001</td>
                      <td contentEditable="true" className="editable_CCCD_1">012345678</td>
                      <td contentEditable="true" className="editable_Name_1">Nguyễn Văn Bay Bi</td>
                      <td contentEditable="true" className="editable_Fly_ID_1">F009</td>
                      <td contentEditable="true" className="editable_Kg_ID_1">K50</td>
                      <td contentEditable="true" className="editable_Seat_ID_1">D09</td>
                      <td contentEditable="true" className="editable_Food_ID_1">FD07</td>
                      <td contentEditable="true" className="editable_Ticket_Price_1">700000</td>
                      <td contentEditable="true" className="editable_Email_1">Conmeo@gmail.com</td>
                      <td contentEditable="true" className="editable_Dis_ID_1">D01</td>
                    </tr>
                    <tr>
                      <td contentEditable="true" className="choose">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td contentEditable="true" className="editable_T_ID_1">T001</td>
                      <td contentEditable="true" className="editable_CCCD_1">012345678</td>
                      <td contentEditable="true" className="editable_Name_1">Nguyễn Văn Bay Bi</td>
                      <td contentEditable="true" className="editable_Fly_ID_1">F009</td>
                      <td contentEditable="true" className="editable_Kg_ID_1">K50</td>
                      <td contentEditable="true" className="editable_Seat_ID_1">D09</td>
                      <td contentEditable="true" className="editable_Food_ID_1">FD07</td>
                      <td contentEditable="true" className="editable_Ticket_Price_1">700000</td>
                      <td contentEditable="true" className="editable_Email_1">Conmeo@gmail.com</td>
                      <td contentEditable="true" className="editable_Dis_ID_1">D01</td>
                    </tr>
                    <tr>
                      <td contentEditable="true" className="choose">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td contentEditable="true" className="editable_T_ID_1">T001</td>
                      <td contentEditable="true" className="editable_CCCD_1">012345678</td>
                      <td contentEditable="true" className="editable_Name_1">Nguyễn Văn Bay Bi</td>
                      <td contentEditable="true" className="editable_Fly_ID_1">F009</td>
                      <td contentEditable="true" className="editable_Kg_ID_1">K50</td>
                      <td contentEditable="true" className="editable_Seat_ID_1">D09</td>
                      <td contentEditable="true" className="editable_Food_ID_1">FD07</td>
                      <td contentEditable="true" className="editable_Ticket_Price_1">700000</td>
                      <td contentEditable="true" className="editable_Email_1">Conmeo@gmail.com</td>
                      <td contentEditable="true" className="editable_Dis_ID_1">D01</td>
                    </tr>
                    <tr>
                      <td contentEditable="true" className="choose">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td contentEditable="true" className="editable_T_ID_1">T001</td>
                      <td contentEditable="true" className="editable_CCCD_1">012345678</td>
                      <td contentEditable="true" className="editable_Name_1">Nguyễn Văn Bay Bi</td>
                      <td contentEditable="true" className="editable_Fly_ID_1">F009</td>
                      <td contentEditable="true" className="editable_Kg_ID_1">K50</td>
                      <td contentEditable="true" className="editable_Seat_ID_1">D09</td>
                      <td contentEditable="true" className="editable_Food_ID_1">FD07</td>
                      <td contentEditable="true" className="editable_Ticket_Price_1">700000</td>
                      <td contentEditable="true" className="editable_Email_1">Conmeo@gmail.com</td>
                      <td contentEditable="true" className="editable_Dis_ID_1">D01</td>
                    </tr>
                    <tr>
                      <td contentEditable="true" className="choose">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td contentEditable="true" className="editable_T_ID_1">T001</td>
                      <td contentEditable="true" className="editable_CCCD_1">012345678</td>
                      <td contentEditable="true" className="editable_Name_1">Nguyễn Văn Bay Bi</td>
                      <td contentEditable="true" className="editable_Fly_ID_1">F009</td>
                      <td contentEditable="true" className="editable_Kg_ID_1">K50</td>
                      <td contentEditable="true" className="editable_Seat_ID_1">D09</td>
                      <td contentEditable="true" className="editable_Food_ID_1">FD07</td>
                      <td contentEditable="true" className="editable_Ticket_Price_1">700000</td>
                      <td contentEditable="true" className="editable_Email_1">Conmeo@gmail.com</td>
                      <td contentEditable="true" className="editable_Dis_ID_1">D01</td>
                    </tr>
                  </tbody>
      </table>
    ),
  };
    return (
        <div className="col-md-10 main">
        <div className="container mt-md-6">
          <div className=" d-flex flex-column align-items-start">
            {/* Các phần tử hiển thị dọc */}
            <h2 className="main-name mb-0">Doanh Số</h2>
            <div className="form-group d-flex flex-row align-items-center">
              <label htmlFor="loaiDoanhSo">Loại doanh số: </label>
              <select className="form-control ml-4" id="loaiDoanhSo">
                <option>Báo cáo theo ngày</option>
                <option>Báo cáo theo tháng</option>
                <option>Báo cáo theo năm</option>
              </select>
              <label htmlFor="ngayBatDau" className="ml-4">Ngày bắt đầu:</label>
              <input type="date" className="form-control ml-3" id="ngayBatDau" />
              <label htmlFor="ngayKetThuc" className="ml-4">Ngày kết thúc:</label>
              <input type="date" className="form-control ml-3" id="ngayKetThuc" />
            </div>
            <div className="btn-click ">
              <button className="btn btn-primary">Tìm kiếm</button>
              <button className="btn btn-secondary ml-2">In báo cáo</button>
              <button className="btn btn-success ml-2">Xuất file excel</button>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="hienThi">Tổng doanh thu: </label>
              <input type="text" className="form-control ml-3" id="TongDoanhThu" />
            </div>
          </div>
          {/* Bảng hiển thị dữ liệu */}
          <div className="container mt-md-4">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === "tongQuan" ? "active" : ""}`}
            id="tongQuan-tab"
            data-toggle="tab"
            href="#tongQuan"
            role="tab"
            aria-controls="tongQuan"
            aria-selected={activeTab === "tongQuan"}
            onClick={() => handleTabChange("tongQuan")}
          >
            Tổng quan
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === "chiTiet" ? "active" : ""}`}
            id="chiTiet-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="chiTiet"
            aria-selected={activeTab === "chiTiet"}
            onClick={() => handleTabChange("chiTiet")}
          >
            Chi tiết
          </a>
        </li>
      </ul>
            <div className="tab-content" id="myTabContent">
            {Object.keys(tabContent).map((tabKey) => (
          <div
            key={tabKey}
            className={`tab-pane fade ${activeTab === tabKey ? "show active" : ""}`}
            id={tabKey}
            role="tabpanel"
            aria-labelledby={`${tabKey}-tab`}
          >
            {tabContent[tabKey]}
          </div>
        ))}
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
      </div>
      
    );
};
export default DoanhSo;