
import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import About from "./About";
import Contactus from "./Contactus";
import image from "./images/image1.png";


const Home = () => {
    return (
        <div>
            <nav >
                <div className='name'>
                    <h3>Ayesha Pervaiz</h3>
                </div>

                <ul className="links">
                    <li className="green">

                        <li><Link to="/">Home</Link></li>
                    </li>
                    <li>
                        <li><Link to="/about">About Me.</Link></li>
                    </li>
                    <li>
                        <li><Link to="/Contactus"> Contact Us.</Link></li>
                    </li>
                </ul>
            </nav>
            <header>
                <div className="header">
                    <div>
                        <button>Front-End Developer</button>
                        <h1 className="white">Talk is cheap.</h1>
                        <h1 className="white">Show me the code!</h1>
                        <p className="gray">I design and code beautiful simple things, and I love what I do.</p>
                        <h3 className="green">Lets chat!</h3>
                    </div>
                    <img className='image' src={image} alt="no image" />
                </div>
            </header>



            <div>
                <About />
                <Contactus />

            </div>


        </div >
    )
}

export default Home
