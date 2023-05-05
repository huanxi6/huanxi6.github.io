import React from "react";
import "../login/login.css";


function enroll(){
    return (
        <div>
            <h2 className="h2">帐号注册</h2>
            <form className="form">
                <div>
                    <label className="label">帐号</label>
                    <input
                        className="input"
                        type="text"
                    />
                </div>
                <div>
                    <label className="label">密码:</label>
                    <input
                        className="input"
                        type="password"
                    />
                </div>
                <div>
                    <label className="label">确认密码:</label>
                    <input
                        className="input"
                        type="password"
                    />
                </div>
                <div>
                    <label className="label">邮箱:</label>
                    <input
                        className="input"
                        type="password"
                    />
                </div>
                <button className="button" type="submit">注册</button>
            </form>
        </div>
    );
}

export default enroll;