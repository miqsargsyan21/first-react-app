import React from 'react';
import image2 from './../images/image-2.png';
import image3 from './../images/image-3.png';
import image4 from './../images/image-4.png';

const Footer = () => {
    return (
        <div className = "footer-div">
            <div id = "left-div">
                <img src = {image2} alt = "Image"></img>
                <span> Over <b>650,000</b> clients entrolled</span>
            </div>
            <div id = "center-div">
                <img src = {image3} alt = "Image"></img>
                <span> Free, <b>no risk</b> credit card debt relief consultation</span>
            </div>
            <div id = "right-div">
                <img src = {image4} alt = "Image"></img>
                <span> Over <b>$10 bilion</b> debt resolved since 2002</span>
            </div>
        </div>
    );
}

export default Footer;