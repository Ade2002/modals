import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import FacebookLogo from '../../img/facebookLogo.svg'
export default class Facebook extends Component {


    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
        accessToken: '',
        password:''
    }
    responseFacebook = response => {
        console.log(response)
    }

    componentClicked = () => console.log('clicked')

    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = null;
        } else {
            fbContent = (<FacebookLogin
                appId="2684487048524619"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                render={renderProps => (
                    <button className="login socials regular" type="submit" onClick={renderProps.onClick}>
                        <img src={FacebookLogo} alt='Facebooklogo' />  facebook</button>
                )}
            />
            )
        }
        return (
            <>
                {fbContent}
            </>
        )
    }
}
