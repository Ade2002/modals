import React from "react";
import { Link } from 'react-router-dom'
function ContinueBtn_upload(props) {
    function continueHandler(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    return (
        <Link to={props.to}>
            <button className='continue_upload' type="submit" onClick={continueHandler}> Continue <svg xmlns="http://www.w3.org/2000/svg" id='arrow' width="27" height="10" viewBox="0 0 37 20" fill="#1207ab">
                    <path d="M35.5 10H2M35.5 10L27.5 18.5M35.5 10L27.5 2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </Link>
    )
}
export default ContinueBtn_upload;