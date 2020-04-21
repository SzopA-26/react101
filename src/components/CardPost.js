import React from 'react'
import Btn from './Btn.js'
import '../css/CardPost.css'

export default function CardPost(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <img src={props.img} style={{width : '100px', height: '100px'}} />
            <ul>
                <li>post detail 1</li>
                <li>post detail 2</li>
                <li>post detail 3</li>
            </ul>
            <Btn />
        </div>
    )
}
