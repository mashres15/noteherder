import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }


  return (
    <div className="body">
      <div className="container">
        <h1>Noteherder</h1>
        <div className="signInContainer">
          <div>
            <button
              className="loginBtn loginBtn--github"
              onClick={() => authenticate(githubProvider)}>
              Sign In With GitHub
        </button>
            <button
              className="loginBtn loginBtn--google"
              onClick={() => authenticate(googleProvider)}>
              Sign In With Google
      </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn