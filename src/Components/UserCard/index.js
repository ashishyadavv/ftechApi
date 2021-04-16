import React from 'react'

import './style.css'

const UserCard=(props)=>{
    return(
        <div className="card-container">
            <img  className="pic_img" src={props.pic}
            />
            <span className="name">{props.firstname} {props.lastname}</span>
            <span className="email">{props.email}</span>
        </div>
    )

}
export default UserCard;