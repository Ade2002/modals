import React from "react";
import Backdrop from './HOC'
import { Link } from 'react-router-dom'
function PasswordChanged(props) {
    function continueHandler(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    return (
        <>
            <span className='flex_btn'>
                <p className='lead'>
                    Password changed <br /> successfuly
                </p>
            </span>
            <form action='post'>
                <svg width="163" height="151" viewBox="0 0 163 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.6299 64.5085C46.5894 74.3641 65.4045 111.994 70.7803 108.41C85.1156 81.5317 119.162 25.0864 155 14.335" stroke="#00BC00" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" />
                    <mask id="path-2-inside-1_431_104" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M120.023 14.7528C107.513 5.48261 92.0267 0 75.2603 0C33.6952 0 0 33.6952 0 75.2603C0 116.825 33.6952 150.521 75.2603 150.521C116.825 150.521 150.521 116.825 150.521 75.2603C150.521 64.9403 148.444 55.1055 144.684 46.151L138.938 50.6204C141.898 58.2635 143.521 66.5724 143.521 75.2603C143.521 112.959 112.959 143.521 75.2603 143.521C37.5612 143.521 7 112.959 7 75.2603C7 37.5612 37.5612 7 75.2603 7C89.7374 7 103.162 11.5068 114.207 19.1939L120.023 14.7528Z" />
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M120.023 14.7528C107.513 5.48261 92.0267 0 75.2603 0C33.6952 0 0 33.6952 0 75.2603C0 116.825 33.6952 150.521 75.2603 150.521C116.825 150.521 150.521 116.825 150.521 75.2603C150.521 64.9403 148.444 55.1055 144.684 46.151L138.938 50.6204C141.898 58.2635 143.521 66.5724 143.521 75.2603C143.521 112.959 112.959 143.521 75.2603 143.521C37.5612 143.521 7 112.959 7 75.2603C7 37.5612 37.5612 7 75.2603 7C89.7374 7 103.162 11.5068 114.207 19.1939L120.023 14.7528Z" fill="#01BB03" />
                    <path d="M120.023 14.7528L132.161 30.6482L153.291 14.5124L131.93 -1.31628L120.023 14.7528ZM144.684 46.151L163.125 38.4096L153.018 14.3322L132.406 30.364L144.684 46.151ZM138.938 50.6204L126.659 34.8334L114.915 43.9678L120.287 57.8422L138.938 50.6204ZM114.207 19.1939L102.782 35.6096L114.754 43.9411L126.345 35.0892L114.207 19.1939ZM131.93 -1.31628C116.092 -13.0522 96.4586 -20 75.2603 -20V20C87.5948 20 98.9328 24.0175 108.116 30.8219L131.93 -1.31628ZM75.2603 -20C22.6495 -20 -20 22.6495 -20 75.2603H20C20 44.7409 44.7409 20 75.2603 20V-20ZM-20 75.2603C-20 127.871 22.6495 170.521 75.2603 170.521V130.521C44.7409 130.521 20 105.78 20 75.2603H-20ZM75.2603 170.521C127.871 170.521 170.521 127.871 170.521 75.2603H130.521C130.521 105.78 105.78 130.521 75.2603 130.521V170.521ZM170.521 75.2603C170.521 62.2347 167.895 49.7714 163.125 38.4096L126.243 53.8925C128.992 60.4396 130.521 67.6459 130.521 75.2603H170.521ZM151.217 66.4075L156.963 61.9381L132.406 30.364L126.659 34.8334L151.217 66.4075ZM163.521 75.2603C163.521 64.0634 161.426 53.3084 157.589 43.3987L120.287 57.8422C122.369 63.2187 123.521 69.0813 123.521 75.2603H163.521ZM75.2603 163.521C124.005 163.521 163.521 124.005 163.521 75.2603H123.521C123.521 101.914 101.914 123.521 75.2603 123.521V163.521ZM-13 75.2603C-13 124.005 26.5155 163.521 75.2603 163.521V123.521C48.6069 123.521 27 101.914 27 75.2603H-13ZM75.2603 -13C26.5155 -13 -13 26.5155 -13 75.2603H27C27 48.6069 48.6069 27 75.2603 27V-13ZM125.632 2.77814C111.342 -7.16694 93.9524 -13 75.2603 -13V27C85.5223 27 94.9815 30.1805 102.782 35.6096L125.632 2.77814ZM107.885 -1.14254L102.069 3.29852L126.345 35.0892L132.161 30.6482L107.885 -1.14254Z" fill="#00BC00" mask="url(#path-2-inside-1_431_104)" />
                </svg>
                <Link to='/login'>
                    <button type="submit" onClick={continueHandler}> Continue <svg xmlns="http://www.w3.org/2000/svg" width="27" height="10" viewBox="0 0 37 20" fill="none">
                        <path d="M35.5 10H2M35.5 10L27.5 18.5M35.5 10L27.5 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                </Link>
            </form>
        </>
    )
}
export default Backdrop(PasswordChanged);