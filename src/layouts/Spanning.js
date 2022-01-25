import React from 'react';
function Spanning(props) {
    return (
        <span className='spanning'>
             <span className="cancel_btn">
                <h1>{props.heading}</h1>
                <span className='Madbtn'>
            {/*
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 39 39" fill="none">
                    <path d="M13 13L19.5 19.5M26 26L19.5 19.5M19.5 19.5L26 13L13 26" stroke="#AAAAAA" />
                    <circle cx="19.5" cy="19.5" r="19" stroke="#AAAAAA" />
                </svg> */} 
                    <i> X </i> 
                </span>
            </span>
        </span>
    )
}
export default Spanning;