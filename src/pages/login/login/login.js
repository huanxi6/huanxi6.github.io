import React, { useState } from "react";
import "./login.css";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            alert("Имя пользователя или пароль не могут быть пустыми");
        } else if (username === "admin") {
            localStorage.setItem("user", JSON.stringify({ username, password }));
            window.location.href = "/admin";
        } else {
            localStorage.setItem("user", JSON.stringify({ username, password }));
            window.location.href = "/";
        }
    };

    return (
        <div>
            <h2 className="h2">用户登录</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label className="label">帐号:</label>
                    <input
                        className="input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className="label">密码:</label>
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="button" type="submit">登录</button>
            </form>
        </div>
    );

}

export default LoginPage;

