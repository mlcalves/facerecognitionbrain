import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt'>
                {/* <div style={{ height: '150px', width: '150px', backgroundColor: 'darkgreen' }}> */}
                <div className='Tilt'>
                    <div className='pa3'>
                        <img style={{ paddingTop: '5px' }} alt='logo' src={brain} />
                    </div>

                </div>
            </Tilt>
        </div>
    );
}

export default Logo