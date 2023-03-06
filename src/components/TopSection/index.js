import React from 'react';
import lion1 from '../../assets/images/lion1.png';
import NavBar from '../NavBar';
import twitter from '../../assets/images/icons/twiiter.png';
import discord from '../../assets/images/icons/discord.png';
import wallet from '../../assets/images/icons/ic_eth.png';
import underline from '../../assets/images/underline.png';
import email from '../../assets/images/icons/email.png';

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
    fontFamily: 'Barlow Condensed',
    fontSize: '230px',
    color: '#CFA817',
    fontWeight: '900',
    textShadow: '4px 0 rgb(207 168 23)'
    // letterSpacing: '-8px',
    // textDecoration: 'underline',
    // textDecorationThickness: '16px',
    // textUnderlinePosition: 'under'
}
const barlow = {
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '44px',
    marginBottom: '35px'
}
const addresses = {
    background: 'rgba(250, 250, 250, 0.14)',
    borderRadius: '5px',
    fontSize: '14px',
    padding: '8px 10px',

}
const grid = {
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    display: 'grid',
    gridGap: '14px',
    gridTemplateAreas:
       ` "box1 box2"
        "box3 box4"`,
    gridTemplateRows: '1fr 1fr',
    width: '80%'
}


const TopSection = () => {
    return (
        <div style={main}>
            <div style={container}>
            <   NavBar/>
                <div  className='d-flex flex-row justify-content-center'>
                    <div className='w-50 text-center'>
                        <img style={{width: "90%"}} src={lion1}/>
                    </div>
                    <div className='w-50 text-start mt-2 pl-4'>
                        <div style={rightContent}>
                            <h1 style={barlow}>David Gilmour</h1>
                            <div style={grid} className=' mt-3'>
                                <span style={addresses} className='font-weight-light'>
                                <img style={{marginRight: '8px'}} src={wallet}/>
                                    Adress 0x0000...000
                                </span>
                                <span style={addresses} className='font-weight-light'>
                                <img style={{marginRight: '8px'}} src={twitter}/>
                                    Discord Not Connected
                                </span>
                                <span style={addresses} className='font-weight-light'>
                                <img style={{marginRight: '8px'}} src={email}/>
                                    test.example@gmail.com
                                </span>
                                <span style={addresses} className='font-weight-light'>
                                <img style={{marginRight: '8px'}} src={discord}/>
                                    Twitter Not Connected
                                </span>
                            </div>
                            {/* <p style={{fontFamily: 'Barlow'}}>ROARpoints</p> */}
                            <h1 style={roarpoints}>12,000</h1>
                            <img style={{width: '86%', marginTop: '-55px'}} src={underline} alt="underline"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSection;