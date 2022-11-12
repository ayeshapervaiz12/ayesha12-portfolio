import React from 'react'

import "./About.css"

const About = () => {
    return (
        <div className='mycard'>
            <div className=' cards'>
                <div className='box'>
                    <h3 className='color'> Html& Css <i class="fa-brands fa-html5"></i></h3>
                    <p className='para'>
                        I create design products with unique ideas.
                    </p>
                </div>
                <div className='box'>
                    <h3 className='color'> React js <i class="fa-brands fa-react"></i></h3>
                    <p className='para'>
                        I create design products with unique ideas.
                    </p>
                </div>
                <div className='box'>
                    <h3 className='color'> Node js <i class="fa-brands fa-node"></i></h3>
                    <p className='para'>
                        I develop Front-End with coding super smooth.
                    </p>
                </div>
            </div>

            <div className='paras'>
                <h5 className='gray'>Introduce</h5>
                <h1 className='white'><span> Hello,</span>  I'm AYESHA PERVAIZ</h1>
                <h3 className='white'>Design is not just what it looks like. Design is how it works!</h3>

                <p className='secondPara'>
                    I have proceeded my dream to be a developer as it has been my lifelong ambition. I am a talented Front-End developer with a UI/UX design background. During my 4 years of work as a freelancer, I had the opportunity to enhance my expertise by collaborating with different companies and by creating useful content for both business and customer use.
                    I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.
                </p>
            </div>

        </div >
    )
}

export default About