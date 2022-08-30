import React from "react";
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <p>Image Thumb here : </p>
            </div>
            <p>Title here : {props.title}</p>
            <p>Desc Here : {props.desc}</p>
            <p>Waktu : {props.time}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: "00.00",
    title: "Kosong",
    desc: "x ditonton. x hari yang lalu"
}

export default YoutubeComp