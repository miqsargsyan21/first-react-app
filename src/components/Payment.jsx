import React from 'react';

const Payment = () => {
    return (
        <div className = "payment-div">
            <p className = "big-text">Get Credit Card Debt Help</p>
            <p>From America's top debt relief company</p>
            <div>
                <p className = "big-text">Choose your debt amount</p>
                <p>$25000</p>
                <input type="range" id="volume" name="volume" min="0" max="100000"></input>
                <br></br>
                <p id = "left-price">$1000</p>
                <p id = "right-price">$100,000+</p>
                <button type="button" className="btn btn-danger">Continue</button>
                <span>or Talk to a Certified Debt Consultant</span>
                <p>
                    <b>800-910-0065</b>
                </p>
            </div>
        </div>
    );
}

export default Payment;