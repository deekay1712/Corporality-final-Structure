import React from 'react'
import '../NewsLetter/NewsLetter.css'
import main from '../NewsLetter/main.png'
import back from '../NewsLetter/back.png'
import growmore from '../NewsLetter/growmore.png'
import learnmore from '../NewsLetter/learnmore.png'
import logo from '../NewsLetter/logo.png'
import rightrect from '../NewsLetter/rightrect.png'
import wall from '../NewsLetter/wall.png'

const NewsLetter = () => {
    return (
        <div className='NewsLetter_Main_work'>
            <div className="container">
                <div className="row NewsLetter_full ">
                    <div className="col-lg-6 ">
                        <div className="text_NewsLetter  flex-column justify-content-center ">
                            <p className='NewsLetter-Text-Heading'>
                                Work with us
                            </p>
                            <p className='NewsLetter-Text-1'>Get a career with a company that truly understands your worth. Bring your curiosity and your most committed self to experience working with Corporality Global.</p>
                            <p className='NewsLetter-Text-2'>Change is positive and long-lasting with us.</p>
                            <button className='button-seventh'>Apply here</button>
                            <br />
                            <br />
                            
                            <p className='News_letter-main'>Our newsletter is more than just information
                                Subscribe to see the difference
                            </p>
                            <div className="Text_newsletter_emain d-flex  align-items-center">
                                <input className='emailinput' type="text" name='' placeholder='Enter your Email' onFocus={(e) => {
                                    e.target.placeholder=''
                                }}  onBlur={(e) => {
                                    e.target.placeholder="Enter your Email"
                                }} />
                                <span ><a className='subscribe' href=''>Subscribe</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 newsLetter_image_section">
                        <img src={growmore} alt =' ' className='growmore_newsletter' />
                        <img src={learnmore} alt =' ' className='learnmore_newsletter' />
                        <img src={rightrect} alt =' ' className='rect_newsletter' />
                        <img src={logo} alt =' ' className='logo_newsletter' />
                        <div className="Main_back_NewsLetter">
                            <div className="Work-newsletter-polygon9">
                                <div >
                                    <img src={main} alt="" />
                                </div>
                            </div>
                            <img src={back} className='back_newsLetter' alt='' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsLetter
