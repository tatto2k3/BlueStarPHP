import React from 'react';
import "./SignUp.css";

export default function SignUp() {
    return (
        <div className="container">
            <div className="text-insertSignUp">
                <h1>Tạo tài khoản mới</h1>
            </div>

            <div className="white-section">

                <div className="inforSignUp">
                    <form className="form-signin1">
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="col-form-label">Email</label>
                            <input type="email" className="form-control1" id="inputEmail" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="col-form-label">Password</label>
                            <input type="password" className="form-control1" id="inputPassword" placeholder="Password" required />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary btn-block" id="btnLogin1">Tạo tài khoản</button>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary btn-block" id="btnGoogle1">Đăng nhập bằng Google</button>
                        </div>
                        <div className="mb-3 d-flex justify-content-between">
                            <label htmlFor="#">Đã có tài khoản ?</label>
                            <a href="/dang-nhap">Đăng nhập</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
