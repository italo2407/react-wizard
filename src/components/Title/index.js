import React from 'react';
import './style.scss'

const Title = ({title}) => {
    return (
        <div id="title">
            <h1>{title}</h1>
            <hr />
        </div>
    )
}

export default Title;