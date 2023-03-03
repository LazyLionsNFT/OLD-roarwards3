import React from 'react';
import lion1 from '../../assets/images/lion1.png';
import NavBar from '../NavBar';

const flex = {
   display: 'flex'
  }
const main = {
    background: '#1F1F1F',
    margin: '26px',
    borderRadius: '30px',
    color: 'white'
}  

const container = {
    width: '86%',
    margin: 'auto'
}


const TopSection = () => {
    return (
        <div style={main}>
            <div style={container}>
            <   NavBar/>
                <div  className='d-flex flex-row justify-content-center'>
                    <div className='w-50 text-center'>
                        <img style={{width: "80%"}} src={lion1}/>
                    </div>
                    <div className='w-50 text-start mt-5 pl-4'>
                        <h4>David Gilmour</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSection;