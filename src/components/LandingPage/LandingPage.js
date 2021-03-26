import React, { Fragment } from 'react'

const authenticatedUser = (
  <div className="landing-page">
    <h1 className="text-center" style={{ marginTop: '90px' }}>Good Grounds 2</h1>
    <p className="text-center" style={{ marginTop: '20px', fontSize: '50px', color: '#f6bd60' }}>Welcome!</p>
  </div>
)

const unauthenticatedUser = (
  <div className="landing-page">
    <h1 className="text-center" style={{ marginTop: '200px', fontSize: '150px' }}>Good Grounds 2</h1>
    <p className="text-center" style={{ fontSize: '40px', color: '#f6bd60' }}>Create An Account or Sign-In To Get Started!</p>
  </div>
)

const LandingPage = ({ user }) => (
  <Fragment>
    { user ? authenticatedUser : unauthenticatedUser }
  </Fragment>
)

export default LandingPage
