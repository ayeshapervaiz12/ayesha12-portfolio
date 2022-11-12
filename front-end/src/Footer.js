import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <section className='footer'>
                <div className='socials'>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                    <a href=""><i class="fa-brands fa-google-plus"></i></a>
                </div>
                <p className='copyright'>
                    COPYRIGHT © 2022 AYESHA PERVAIZ- ALL RIGHTS RESERVED.
                </p>
            </section>


        </div>
    )
}

export default Footer