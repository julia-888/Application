import React from "react";
import logo from './logo.png';

const HeadNav = function(){
    return (
        <div className="HeadNav">
            <img className="Pic" src={logo} alt="" />
            <button className="EditorButton">Конструктор</button>
            <button className="NavButtons">Мои сборки</button>
            <button className="NavButtons">Мои заказы</button>
        </div>  
    );
}

export default HeadNav;