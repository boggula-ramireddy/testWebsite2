import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class LogIn extends Component {
  state = {password: '', email: '', showSubmitError: false}

  submitForm = async event => {
    event.preventDefault()
    const {email, password} = this.state
    if (email === '' || password === '') {
      console.log('enter')
      this.setState({showSubmitError: true})
    }
    if (email !== '' && password !== '') {
      const {history} = this.props
      Cookies.set('jwt_token', 'Login', {
        expires: 30,
        path: '/',
      })
      console.log('sign')
      history.replace('/')
    }
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
    console.log(event.target.value)
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {email, password, showSubmitError} = this.state
    return (
      <div className="main-container">
        <div className="balck_container">Board</div>
        <div className="other_container">
          <div className="logIN_container">
            <h1 className="signInHeading">Sign in</h1>
            <p className="para">sign in into your account</p>
            <div className="company_box">
              <div className="google_box">
                <img
                  src="data:image/jpeg;base64,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"
                  className="google_img"
                  alt="hgvhj"
                />
                <p>sign in with google</p>
              </div>
              <div className="google_box">
                <img
                  src="data:image/jpeg;base64,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"
                  className="google_img"
                  alt="hgvhj"
                />
                <p>sign in with google</p>
              </div>
            </div>
            <form className="form-container" onSubmit={this.submitForm}>
              <div className="input-container">
                <label htmlFor="googleMail">Email Adress</label>
                <input
                  id="googleMail"
                  type="text"
                  className="input_classname"
                  value={email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="text"
                  className="input_classname"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <p className="forgetPassword_classname">Forget Password?</p>
              <button type="submit" className="sign_className">
                Sign In
              </button>
              {showSubmitError && (
                <p className="error_message">Enter the values</p>
              )}
            </form>
            <p className="NaAccount">
              Don't have an account?
              <span className="registerClassName">Register here</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LogIn
