import React from 'react';

const footer = {
    background: '#1F1F1F',
    color: '#FAFAFA',
    // fontFamily: 'Barlow Condensed',
    fontStyle: 'normal',
    fontSize: '16px',
    padding: '40px 0px'
}

const footer_ul = {
    listStyle: 'none',
    display: 'flex',
  }

  const marginRight = {
    marginRight: '30px'
  }

  const container = {
    width: '84%',
    margin: 'auto'
}

const Footer = () => {
    return (
        <div style={footer}>
            <div style={container}>
                    {/* <ul className='mb-0' style={footer_ul}> */}
                        <span style={marginRight}>Privacy</span>
                        <span>Terms</span>
                        <span style={{float: 'right'}}>2023 Blockchain Media PTY LTD</span>
                    {/* </ul> */}
                {/* <div>
                    <p className='mb-0'>2023 Blockchain Media PTY LTD</p>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;