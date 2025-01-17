import React from 'react'
import '../Incl/Inclusion.css'
import Main from '../Incl/main.png'
import Back from '../Incl/back.png'
import wall from '../Incl/wall.png'
import smallrect from '../Incl/smallrect.png'
import rect from '../Incl/rect.png'
import smallerrect from '../Incl/smallerrect.png'


const Inclusion = () => {
    return (
        <div className="Inclusion">
            <div className="navbar-Id"></div>
            <div className="container container-1-Id">
                <div className="row first-image-Id">
                    <div className="col-lg-6">
                        <div data-aos="fade-right" className="text-box-1-Id">

                            <p className='container-1_text-Id'>Inclusion and Diversity</p>
                            <p className='container-2_text-Id'>Creating a culture of equality </p>
                            <p className='container-3_text-Id'>Everyone is equal and the right person always deserves the right opportunities.</p>
                            <div className="small-rect-prev-1-Id"><img src={smallerrect} alt='' className='smaller-rect-prev-1' /></div>
                        </div>
                    </div>
                    <div className="col-lg-6  d-flex justify-content-center text-center flex-column ">
                        <div data-aos="fade-left" className="image-first-Id">
                            <img alt='' className='rect-Id' src={rect} alt='' />
                            <img alt='' className='wall-Id' src={wall} />
                            <img alt='' className='smallrect-Id' src={smallrect} />
                            <img alt='' className='backimg-Id' src={Back} />
                            <div className="banner_right_inner-Id" >
                                <img className='main-prev1-Id' src={Main} />
                            </div>

                        </div>

                    </div>
                </div>


            </div>
            {/* <div className="blue_print_overlay">
                <div className="blue_print_ellipse-1"></div>

            </div> */}


        </div>
    )
}

export default Inclusion
