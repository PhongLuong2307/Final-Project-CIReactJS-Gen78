import React from 'react';

const SliderText = (props) => {
    const [sliderTitle1, sliderTitle2, sliderSubTitle1, sliderSubTitle2] = props;

    return (
        <React.Fragment>
            <div className="sliderText-content">
                <h1 className="slider-title">{sliderTitle1}</h1>
                <h1 className="slider-title">{sliderTitle2}</h1>
                <h2 className="slide-subtitle">{sliderSubTitle1}</h2>
                <h2 className="slide-subtitle">{sliderSubTitle2}</h2>
            </div>
        </React.Fragment>
    )
}

export default SliderText;