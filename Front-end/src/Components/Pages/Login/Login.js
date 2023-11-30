import React from 'react';
import "./Login.css";

export default function Login ()
{
    return (
            <div className="container">
            <div className="text-insertLogin">
                <h1>Đăng nhập tài khoản</h1>
            </div>
            <div className = "white-section">
            <div className="inforLogin">
                <form className="form-signin">
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="col-form-label">Email</label>
                        <input type="email" className="form-controlLogin" id="inputEmail" placeholder="Email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="col-form-label">Password</label>
                        <input type="password" className="form-controlLogin" id="inputPassword" placeholder="Password" required />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary btn-block" id="btnLogin">Login now</button>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <a href="#">Forgot password ?</a>
                        <a href="/dang-ky">Sign up</a>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};