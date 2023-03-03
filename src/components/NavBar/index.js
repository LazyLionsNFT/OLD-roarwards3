import React from 'react';
import logo from '../../assets/images/logo.png'

const navbar = {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    display: 'flex',
    color: 'white',
    paddingTop: '15px',
    fontSize: '16px'
  }
  
  const navbar_ul = {
    listStyle: 'none',
    display: 'flex',
    marginTop: 'unset',
    padding: '30px',
    marginBottom: '0px'
  }
  
  const navbar_li = {
    marginRight: '20px'
  }

  const marginRight = {
    marginRight: '30px'
  }

const NavBar = () => {
    return (
        <div className='flex-row justify-content-center' style={navbar}>
            <div className='w-50'>
                <img className='mt-3' src={logo}/>
            </div>
            <div className='w-50'>
                <ul style={navbar_ul}>
                    <li style={marginRight}>ROARwards</li>
                    <li style={marginRight}>Members</li>
                    <li style={marginRight}>More</li>
                    <li style={marginRight}>Buy</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;