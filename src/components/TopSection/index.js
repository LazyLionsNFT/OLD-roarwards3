import React from 'react';
import lion1 from '../../assets/images/lion1.png';
import NavBar from '../NavBar';
import twitter from '../../assets/images/icons/twiiter.png';
import discord from '../../assets/images/icons/discord.png';
import wallet from '../../assets/images/icons/ic_eth.png';

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

const rightContent = {
    width: '90%',
    marginLeft: 'auto'
}

const roarpoints = {
    fontSize: '181px',
    color: '#CFA817',
    fontWeight: '900',
    letterSpacing: '-8px',
    textDecoration: 'underline',
    textDecorationThickness: '16px',
    textUnderlinePosition: 'under'
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
                        <div style={rightContent}>
                            <h1 style={{fontWeight: '700'}}>David Gilmour</h1>
                            <div  className='d-flex flex-row justify-content-between mt-3'>
                                <span style={{fontSize: '14px'}} className='font-weight-light'>
                                <img style={{marginRight: '6px'}} src={wallet}/>
                                    Adress 0x646434..5a6
                                </span>
                                <span style={{fontSize: '14px'}} className='font-weight-light'>
                                <img style={{marginRight: '6px'}} src={twitter}/>
                                    Discord Not Connected
                                </span>
                                <span style={{fontSize: '14px'}} className='font-weight-light'>
                                <img style={{marginRight: '6px'}} src={discord}/>
                                    Twitter Not Connected
                                </span>
                            </div>
                            <h1 style={roarpoints}>12,000</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSection;