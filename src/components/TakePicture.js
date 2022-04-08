import React, { useRef, useEffect, useState } from 'react'
import Backdrop from './HOC';
import Spanning from '../layouts/Spanning';
import ContinueBtn from "../layouts/Continuebtn_upload";
function Takepicture() {
    useEffect(() => { document.title = 'Take picture' })
    const videoRef = useRef(null)
    const photoRef = useRef(null)
    const [hasPhoto, setHasPhoto] = useState(false);
    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { width: 1920, height: 1080 }
            })
            .then(stream => {
                let video = videoRef.current
                video.srcObject = stream;
                video.play()
            })
            .catch(err => {
                console.error(err)
            })
        let uploadLabel = document.getElementById('imageUpload');
        let showVideo = document.getElementById('showVideo');
        uploadLabel.style.display = 'none'
        showVideo.style.display = 'none'
        let camera = document.getElementsByClassName('camera')[0]
        camera.style.display = 'flex'
    }
    const takePhoto = () => {
        let camera = document.getElementsByClassName('camera')[0]
        let image = document.getElementById('output')
        let cameraSvg = document.getElementById('cameraSvg')
        let uploadLabel = document.getElementById('imageUpload')
        uploadLabel.style.display = 'flex'
        const width = 414;
        const height = width / (16 / 9)
        let video = videoRef.current;
        let photo = photoRef.current;
        let ctx = photo.getContext('2d')
        photo.width = width
        photo.height = height
        ctx.drawImage(video, 0, 0, width, height);
        setHasPhoto(true)
        image.style.display = 'flex'
        cameraSvg.style.display = 'none'
        camera.style.display = 'none'
        let pictureURL = photo.toDataURL()
        image.src = pictureURL
        console.log(pictureURL)
    }


    const closePhoto = () => {
        let camera = document.getElementsByClassName('camera')[0]
        let uploadLabel = document.getElementById('imageUpload')
        uploadLabel.style.display = 'none'
        camera.style.display = 'flex'
        let photo = photoRef.current;
        let ctx = photo.getContext('2d')
        ctx.clearRect(0, 0, photo.width, photo.height)
        setHasPhoto(false)
    }
    useEffect(() => {
    }, [videoRef]);
    const loadFile = (e) => {
        let input = document.getElementById('inputfile')
        let image = document.getElementById('output')
        image.src = URL.createObjectURL(e.target.files[0]);
        let cameraSvg = document.getElementById('cameraSvg')
        image.onload = () => {
            URL.revokeObjectURL(image.src)
        }
        input.style.display = 'none'
        cameraSvg.style.display = 'none'
        image.style.display = 'inline'
    }
    return (
        <>
            <Spanning heading='Upload Picture' />

            <form action="post">
                <label className='imageUpload regular' htmlFor='inputfile' id='imageUpload' >
                    <img id='output' className='' alt='bb' />
                    <svg id='cameraSvg' width="71" height="54" viewBox="0 0 71 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M66.5625 44.375C66.5625 45.5519 66.095 46.6806 65.2628 47.5128C64.4306 48.345 63.3019 48.8125 62.125 48.8125H8.875C7.6981 48.8125 6.56941 48.345 5.73721 47.5128C4.90502 46.6806 4.4375 45.5519 4.4375 44.375V17.75C4.4375 16.5731 4.90502 15.4444 5.73721 14.6122C6.56941 13.78 7.6981 13.3125 8.875 13.3125H14.0757C17.6046 13.3106 20.9883 11.9076 23.4832 9.41194L27.1664 5.73769C27.9962 4.90761 29.1211 4.4401 30.2948 4.4375H40.6963C41.8731 4.43775 43.0016 4.90544 43.8336 5.73769L47.5079 9.41194C48.7443 10.6487 50.2123 11.6298 51.828 12.2991C53.4437 12.9683 55.1754 13.3127 56.9243 13.3125H62.125C63.3019 13.3125 64.4306 13.78 65.2628 14.6122C66.095 15.4444 66.5625 16.5731 66.5625 17.75V44.375ZM8.875 8.875C6.5212 8.875 4.26381 9.81004 2.59943 11.4744C0.935042 13.1388 0 15.3962 0 17.75L0 44.375C0 46.7288 0.935042 48.9862 2.59943 50.6506C4.26381 52.315 6.5212 53.25 8.875 53.25H62.125C64.4788 53.25 66.7362 52.315 68.4006 50.6506C70.065 48.9862 71 46.7288 71 44.375V17.75C71 15.3962 70.065 13.1388 68.4006 11.4744C66.7362 9.81004 64.4788 8.875 62.125 8.875H56.9243C54.5706 8.8745 52.3136 7.93913 50.6496 6.27463L46.9754 2.60037C45.3114 0.935874 43.0544 0.000502657 40.7007 0H30.2992C27.9456 0.000502657 25.6886 0.935874 24.0246 2.60037L20.3504 6.27463C18.6864 7.93913 16.4294 8.8745 14.0757 8.875H8.875Z" fill="#A4A4A4" />
                        <path d="M35.5 39.9375C32.5578 39.9375 29.736 38.7687 27.6555 36.6882C25.5751 34.6077 24.4062 31.786 24.4062 28.8438C24.4062 25.9015 25.5751 23.0798 27.6555 20.9993C29.736 18.9188 32.5578 17.75 35.5 17.75C38.4422 17.75 41.264 18.9188 43.3445 20.9993C45.4249 23.0798 46.5938 25.9015 46.5938 28.8438C46.5938 31.786 45.4249 34.6077 43.3445 36.6882C41.264 38.7687 38.4422 39.9375 35.5 39.9375ZM35.5 44.375C39.6191 44.375 43.5696 42.7387 46.4823 39.826C49.3949 36.9133 51.0312 32.9629 51.0312 28.8438C51.0312 24.7246 49.3949 20.7742 46.4823 17.8615C43.5696 14.9488 39.6191 13.3125 35.5 13.3125C31.3809 13.3125 27.4304 14.9488 24.5177 17.8615C21.6051 20.7742 19.9688 24.7246 19.9688 28.8438C19.9688 32.9629 21.6051 36.9133 24.5177 39.826C27.4304 42.7387 31.3809 44.375 35.5 44.375ZM13.3125 19.9688C13.3125 20.5572 13.0787 21.1215 12.6626 21.5376C12.2465 21.9537 11.6822 22.1875 11.0938 22.1875C10.5053 22.1875 9.94095 21.9537 9.52486 21.5376C9.10876 21.1215 8.875 20.5572 8.875 19.9688C8.875 19.3803 9.10876 18.816 9.52486 18.3999C9.94095 17.9838 10.5053 17.75 11.0938 17.75C11.6822 17.75 12.2465 17.9838 12.6626 18.3999C13.0787 18.816 13.3125 19.3803 13.3125 19.9688Z" fill="#A4A4A4" />
                    </svg>
                    <input type='file' onChange={loadFile} id='inputfile' className='inputImage' accept="image/*" />
                </label>
                <span className="camera">
                    <video ref={videoRef}></video>
                    <input type='button' value='Take picture' className="takePicture regular" onClick={takePhoto} />
                </span>
                <span className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                    <canvas ref={photoRef}></canvas>
                    <input type='button' value='Retake picture' className="takePicture regular" onClick={closePhoto} />
                </span>
                <input id='showVideo' type='button' value='Take picture' className="takePicture regular" onClick={getVideo} />
                <ContinueBtn to='/chooseplan' />
            </form>
        </>
    )
}

export default Backdrop(Takepicture);