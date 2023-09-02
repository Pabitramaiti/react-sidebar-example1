import React from 'react';
import './sidebar.css';
import {SidebarData} from './SidebarData'; //Using directly json data defined in a js veriable
import menuData from './SidebarData.json'; //Using Json file

function Sidebar(){
    return (<div className="Sidebar">
        <ul className="SidebarList">
            {SidebarData.map((key, value) => {
                return ( <li key={key.title} className="menuRow" id={window.location.pathname == key.link ? "active" : ""} onClick={()=>{window.location.pathname = key.link}} ><div id="icon">{key.icon}</div>
                <div id="title">{key.title}</div>
                </li>)
            })}
        </ul>
    </div>);
}

function Sidebar2(){
    return (<div className="Sidebar">
        <ul className="SidebarList">
            {menuData.sidebarData.map((key) => {
                return (<li key={key} className="menuRow" id={window.location.pathname == key.link? "active" : ""} onClick={()=>{window.location.pathname = key.link}} > {" "} <div id="icon">{key.icon}</div> {" "}
                <div id="title">{key.title}</div>
                </li>)
             })}
        </ul>
    </div>);
}

export default Sidebar;