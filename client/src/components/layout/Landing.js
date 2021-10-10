import React from 'react'

const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">WebApplication</h1>
                    <p className="lead">Create developer profile/.........</p>
                    <div className="buttons">
                        <a href="register.html" className="btn btn-primary">Sign Up</a>
                        <a href="Login.html" className="btn btn">Login</a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Landing