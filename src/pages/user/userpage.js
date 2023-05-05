import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import home_icon from "./img/home.png";
import hot_icon from "./img/chat-arrow-grow.png";
import friend_icon from "./img/users-alt.png";
import my_icon from "./img/user.png";
import logo from "./img/logo.png";
import up from "./img/upload_icon.png";
import Home from "./home/home";
import Hot from "./hot/hot";
import Friend from "./friend/friend";
import My from "./my/my";
import Login from "../login/loginpage";
import Up from "./up/up";
import Admin from '../admin/adminpage';


function User() {
  const [,setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (e) => {
    e.target.style.transform = "rotate(360deg)";
    e.target.style.transition = "0.5s";
  };
  const handleMouseLeave = (e) => {
    e.target.style.transform = "rotate(0deg)";
    e.target.style.transition = "0.5s";
  };
  return (
    <Router >
    <div style={{margin: 0, padding: 0}}>
    <header style={{backgroundColor: 'gray', width: '100%', height: '80px', position: 'fixed', top: 0, zIndex: 1}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
          <Link to="/">
            <img src={logo} alt="logo" style={{width: '90px', height: '90px'}}/>
            </Link>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
              <input type="text" placeholder="搜索" style={{border: '2px solid black', borderRadius: '10px', height: '40px', width: '40%',maxWidth:'400px' ,fontSize: '20px', textAlign: 'center'}}/>
              <button style={{backgroundColor: 'white', border: '2px solid black', borderRadius: '10px', fontSize: '20px', marginLeft: '20px'}}>搜索</button>
            </div>
          </div>
          <Link to="/up" style={{color: 'white', textDecoration: 'none'}}>
          <img src={up} alt="home icon" style={{width: '30px', height: '30px', marginRight: '10px'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></img>
          </Link>
          <Link to="/login" style={{color: 'white', textDecoration: 'none', marginLeft: '20px'}}>登录</Link>
        </div>
      </header>
      <div style={{display: 'flex', marginTop: '80px'}}>
        <div className="sidebar" style={{backgroundColor: 'gray', margin: 0, padding: 0, minWidth: '120px', maxWidth: '200px', height: 'calc(100vh - 80px)', position: 'fixed', left: 0}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '25%'}}>
              <Link to="/" style={{color: 'black', fontWeight: 'bold', fontSize: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>
              <img src={home_icon} alt="home icon" style={{width: '30px', height: '30px'}}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
              <span style={{marginTop: '10px', display: 'inline-block', textAlign: 'center'}}>主页</span>
              </Link>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '25%'}}>
            <Link to="/hot" style={{color: 'black', fontWeight: 'bold', fontSize: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>
              <img src={hot_icon} alt="hot icon" style={{width: '30px', height: '30px'}}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
              <span style={{marginTop: '10px', display: 'inline-block', textAlign: 'center'}}>热门</span>
              </Link>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '25%'}}>
              <Link to="/friend" style={{color: 'black', fontWeight: 'bold', fontSize: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>
              <img src={friend_icon} alt="friend icon" style={{width: '30px', height: '30px'}}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
              <span style={{marginTop: '10px', display: 'inline-block', textAlign: 'center'}}>好友</span>
              </Link>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '25%'}}>
              <Link to="/my" style={{color: 'black', fontWeight: 'bold', fontSize: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>
              <img src={my_icon} alt="my icon" style={{width: '30px', height: '30px'}}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
              <span style={{marginTop: '10px', display: 'inline-block', textAlign: 'center'}}>我的</span>
              </Link>
            </div>
          </div>
        </div>
        <div style={{marginLeft: '120px', width: '100%'}}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hot" element={<Hot />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/my" element={<My />} />
          <Route path='/login' element={<Login />} />
          <Route path='/up' element={<Up />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
        </div>
      </div>
    </div>
    </Router >
  );
}

export default User;




