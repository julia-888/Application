import React from 'react'
import phone from './../img/phone.svg'
import login from './../img/login.svg'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar__top">
            <div className="logo">
                <div className="logo__icon"></div>
                <div className="logo__text">Perepherial Editor</div>
            </div>
            <div className="links">
                <Link to="/" className="link">Магазин</Link>
                <Link to="/editor" className="link">Конфигуратор</Link>
                <div className="link unactive">Корзина</div>
                <div className="link">
                    Связаться
                    <img src={phone} className="phoneIcon"></img>
                </div>
                <div className="link unactive">
                    Войти
                    <img src={login} className="phoneIcon"></img>
                </div>
            </div>
        </div>
        <div className="navbar__bottom">
            {/* <div className="search"></div> */}
        </div>
    </div>
  )
}
