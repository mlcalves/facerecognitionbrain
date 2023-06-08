import React from 'react';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
                <div></div>
            </div>
        </div>
    );
}

export default FaceRecognition;