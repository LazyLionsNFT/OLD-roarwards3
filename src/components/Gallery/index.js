import React from 'react';
import lion1 from '../../assets/images/lion1.png';
import NavBar from '../NavBar';
import lion2 from '../../assets/images/lion2.png';
import lion3 from '../../assets/images/lion3.png';
import lion4 from '../../assets/images/lion4.png';
import lion5 from '../../assets/images/lion5.png';

const flex = {
   display: 'flex'
  }
const container = {
    width: '86%',
    margin: 'auto',
    color: 'white'
}


const Gallery = () => {
    return (
            <div style={container}>
                <div  className='d-flex flex-row justify-content-center'>
                    <div className='w-50 text-start'>
                        <h4>MY GALLERY</h4>
                        <div className='d-flex justify-content-between'>
                            <img src={lion2}/>
                            <img src={lion3}/>
                            <img src={lion4}/>
                            <img src={lion5}/>
                        </div>
                    </div>
                    <div className='w-50 text-start'>
                        <h4>Profile achievements</h4>
                    </div>
                </div>
            </div>
    );
};

export default Gallery;