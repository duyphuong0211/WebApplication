import React from 'react'
import {Link} from "react-router-dom";

const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">WebApplication</h1>
                    <p className="lead">Create developer profile/.........</p>
                    <div className="buttons">
                        <Link to="/register" className="btn btn-primary">Sign Up</Link>
                        <Link to="/Login" className="btn btn">Login</Link>
                    </div>
                </div>
            </div>
        </section>
    )
};


export default Landing;