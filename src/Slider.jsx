import React from 'react';

const Slider = () => {
    return (
        <div className="my-5">
            <label htmlFor="customRange1">Example range</label>
            <input type="range" className="custom-range" id="customRange1" />
        </div>
    );
};

export default Slider;
