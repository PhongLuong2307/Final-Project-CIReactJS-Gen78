import React from 'react';
import { Link } from 'react-router-dom';

const FeatureItem = (props) => {

    return (
        <React.Fragment>
            <div className='feature-item'>
                <div className='featureImg-container'>
                    <Link className='feature-link'>
                        <img className='feature-icon' src={props.featureImgSrc} alt='img' />
                    </Link>
                </div>
                <div className='featureText-container'>
                    <Link className='feature-link'>
                        <h5 className='feature-titlte'>Lorem Ipsum</h5>
                    </Link>
                    <p className='feature-text'>
                        Donec ipsum diam, pretium no mollis dapibus risus.
                        Nullam dolor nibh retro pulvinar at interdum eget,
                        suscipit id felis tincidunt risus.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FeatureItem