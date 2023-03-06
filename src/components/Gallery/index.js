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
    margin: '66px auto',
    color: 'white'
}

const imgbox = {
    width: "20%",
    marginRight: "10px"
}

const imgcircle = {
    borderRadius: '50%',
    width: '72px', /* adjust size as needed */
    height: '72px',
    objectFit: 'cover',
    margin: '0px 10px 14px 10px'
}

const profileacvh = {
    width: '90%',
    marginLeft: 'auto'
}

const Gallery = () => {
    return (
            <div style={container}>
                <div  className='d-flex flex-row justify-content-center'>
                    <div className='w-50 text-start'>
                        <h4 style={{fontWeight: '700', fontSize: '24px'}}>MY GALLERY</h4>
                        <div className='d-flex mt-4'>
                            <img style={imgbox} src={lion2}/>
                            <img style={imgbox} src={lion3}/>
                            <img style={imgbox} src={lion4}/>
                            <img style={imgbox} src={lion5}/>
                        </div>
                    </div>
                    <div className='w-50 text-start'>
                        <h4 style={{marginLeft: '75px',fontWeight: '700', fontSize: '24px'}}>PROFILE ACHIEVEMENTS</h4>
                        <div style={profileacvh} className='mt-4'>
                            <img style={imgcircle} src={lion2}/>
                            <img style={imgcircle} src={lion3}/>
                            <img style={imgcircle} src={lion4}/>
                            <img style={imgcircle} src={lion5}/>
                            <img style={imgcircle} src={lion4}/>
                            <img style={imgcircle} src={lion5}/>
                            <img style={imgcircle} src={lion2}/>
                            <img style={imgcircle} src={lion3}/>
                            <img style={imgcircle} src={lion4}/>
                            <img style={imgcircle} src={lion5}/>
                            <img style={imgcircle} src={lion4}/>
                            <img style={imgcircle} src={lion5}/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Gallery;