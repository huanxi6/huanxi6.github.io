
import React, { useState } from "react";
import Login from "./login/login";
import Enroll from "./enroll/enroll";

function LoginPage() {
  const [showLogin, setShowLogin] = useState(true); // 控制登录表单和注册表单的显示

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => setShowLogin(true)}>登录</button>
          </li>
          <li>
            <button onClick={() => setShowLogin(false)}>注册</button>
          </li>
        </ul>
      </nav>
      {showLogin ? <Login /> : <Enroll />}
    </div>
  );
}

export default LoginPage;
