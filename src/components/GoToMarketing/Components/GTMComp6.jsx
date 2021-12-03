import "../Components/GTMComp6.css";
import circ1 from "./images/circ1.png";
import circ2 from "./images/circ2.png";
import circ3 from "./images/circ3.png";
import circ4 from "./images/circ4.png";
import circ5 from "./images/circ5.png";
import circ6 from "./images/circ6.png";
import circ7 from "./images/circ7.png";
import img1 from "./images/img1.png";
import img1Back from "./images/img1Back.png";

export default function GTMComp6() {
    return (
        <div className="gtmc6Wrapper">
            <div className="gtmc6Top">
                <p className="gtmHeading">Corporality has what it takes </p>
                <p className="gtmPara">Our structured and proven methodology emanates powerful Go To Marketing strategies that meet the critical needs of your product’s positioning. We differentiate your product in a competitive environment and tailor a model that best suits the targeted segment. With us, GTM is a metamorphosis that ensures complete engagement while mapping all needs, impacts and opportunities for ultimate success.</p>
            </div>

            <div className="gtmc6Bottom">
                <img src={img1} alt="" />
                <div className="gtmc6Circle">
                    <div className="gtmc6ImgBack">
                        <img className="img1Back" src={img1Back} alt="" />
                    </div>
                    <div className="gtmc6Circ1">
                        <img className="circ1" src={circ1} alt="" />
                    </div>
                    <div className="gtmc6Circ2">
                        <img className="circ2" src={circ2} alt="" />
                    </div>
                    <div className="gtmc6Circ3">
                        <img className="circ3" src={circ3} alt="" />
                    </div>
                    <div className="gtmc6Circ4">
                        <img className="circ4" src={circ4} alt="" />
                    </div>
                    <div className="gtmc6Circ5">
                        <img className="circ5" src={circ5} alt="" />
                    </div>
                    <div className="gtmc6Circ6">
                        <img className="circ6" src={circ6} alt="" />
                    </div>
                    <div className="gtmc6Circ7">
                        <img className="circ7" src={circ7} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
