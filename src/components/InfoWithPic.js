import React from 'react';

function InfoWithPic(props) {
    const imgField = props.infoContent.pic ? <img src={props.infoContent.pic.url} alt="pic" className={props.infoContent.pic.className} style={props.infoContent.pic.style}></img>
        : null;
    const titleField = props.infoContent.title ? <h1>{props.infoContent.title}</h1> : null;
    const introField = props.infoContent.intro ? <h3>{props.infoContent.intro}</h3> : null;
    const listPart = props.infoContent.list ? props.infoContent.list.map((item, index) =>
        <li key={index}>
            <h4>{item}</h4>
        </li>)
        : null;
    const listField = <ul>{listPart}</ul>;
    return (
        <div className="clearfix oramaInfoPic" style={{ padding: "20px" }}>
            {imgField}
            <div>
                {titleField}
                {introField}
                {listField}
            </div>

        </div>


    )
}

export default InfoWithPic
