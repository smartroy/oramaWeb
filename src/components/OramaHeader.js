import React from 'react'
import NavBar from './NavBar'

function OramaHeader(props) {
    return (
        <div className="top-box">
            <NavBar navItems={props.navItems}></NavBar>
            <div className="mainTitle">
                <div className="picAndText">
                    <img src="/imgs/oramadick.png" width="50" height="50" style={{ right: "50%" }} />
                    <span style={{ fontSize: 50 }}>rama</span>
                </div>
                <h2>The future of NTF's</h2>
            </div>
        </div>
    )
}

export default OramaHeader
