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
    width: '86%',
    margin: 'auto'
}

const Footer = () => {
    return (
        <div style={footer}>
            <div className='container'>
                    <ul className='mb-0' style={footer_ul}>
                        <li style={marginRight}>Privacy</li>
                        <li>Terms</li>
                        {/* <p>2023 Blockchain Media PTY LTD</p> */}
                    </ul>
                {/* <div>
                    <p className='mb-0'>2023 Blockchain Media PTY LTD</p>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;