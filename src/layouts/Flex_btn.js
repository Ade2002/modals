import React from "react";
import { Link } from 'react-router-dom'
function flex_btn(props) {

    return (
        <span className="flex_btn">
            <button className="login active" >
                <Link to='/'>
                    {props.login}
                </Link>
            </button>
            <button className="signUp regular">
                <Link to='/signup'>{props.signup}</Link>
            </button>
        </span>
    )
}
export default flex_btn;